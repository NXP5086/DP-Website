'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { ArrowRight, MapPin } from "lucide-react"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Link from 'next/link';
import destinationData from '../data/destinationData.json';

const locations = [
  { name: "Mexico", lat: 23.6345, lng: -102.5528, slug: "mexico" },
  { name: "Dominican Republic", lat: 18.7357, lng: -70.1627, slug: "dominican-republic" },
  { name: "Bahamas", lat: 25.0343, lng: -77.3963, slug: "bahamas" },
  // { name: "Jamaica", lat: 18.1096, lng: -77.2975, slug: "jamaica" },
  // { name: "Puerto Rico", lat: 18.2208, lng: -66.5976, slug: "puerto-rico" },
  // { name: "Costa Rica", lat: 9.7489, lng: -83.7534, slug: "costa-rica" },

  // { name: "France", lat: 46.2276, lng: 2.2137, slug: "france" },
  // { name: "Malta", lat: 35.9375, lng: 14.3754, slug: "malta" },
  // { name: "Italy", lat: 41.8719, lng: 12.5674, slug: "italy" },
  // { name: "Turkiye", lat: 38.9637, lng: 35.2433, slug: "turkiye" },
  // { name: "Greece", lat: 39.0742, lng: 21.8243, slug: "greece" },
  // { name: "Croatia", lat: 45.1, lng: 15.2, slug: "croatia" },
  // { name: "United Arab Emirates", lat: 23.4241, lng: 53.8478, slug: "uae" },
  // { name: "Maldives", lat: 3.2028, lng: 73.2207, slug: "maldives" },
  // { name: "India", lat: 20.5937, lng: 78.9629, slug: "india" },
  // { name: "Thailand", lat: 15.8700, lng: 100.9925, slug: "thailand" },
  // { name: "Bali", lat: -8.4095, lng: 115.1889, slug: "bali" },
  // { name: "Mauritius", lat: -20.3484, lng: 57.5522, slug: "mauritius" },
];



const LocationMarker = ({ loc, customIcon }) => {
  const markerRef = useRef(null);
  const timeoutRef = useRef(null);

  const data = destinationData.find((d) => d.slug === loc.slug);
  const imageUrl = data?.cardImage

  const handleMarkerMouseOver = (event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    event.target.openPopup();
  };

  const handleMarkerMouseOut = (event) => {
    timeoutRef.current = setTimeout(() => {
      event.target.closePopup();
    }, 500);
  };

  const handlePopupMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePopupMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.closePopup();
      }
    }, 500);
  };

  return (
    <Marker
      ref={markerRef}
      position={[loc.lat, loc.lng]}
      icon={customIcon}
      eventHandlers={{
        mouseover: handleMarkerMouseOver,
        mouseout: handleMarkerMouseOut,
      }}
    >
      <Popup>
        <div
          className="popup-card"
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
        >
          <div className="popup-image-container">
            <img
              src={imageUrl}
              alt={loc.name}
              className="popup-image"
            />
          </div>
          <div className="popup-content">
            <span className="popup-title">{loc.name}</span>
            <Link href={`/destinations/${loc.slug}`} className="popup-link">
              View Details
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

const Locationmap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const customIcon = useMemo(() => {
    return new L.DivIcon({
      className: 'custom-div-icon',
      html: `<div class='pin'></div><div class='pulse'></div>`,
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -35],
    });
  }, []);

  if (!isMounted) {
    return <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />;
  }

  return (
    <div className="map-wrapper h-[400px] w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 relative z-0">
      <style jsx global>{`

        .leaflet-container {
          width: 100%;
          height: 500px; 
          z-index: 1;
          overflow: hidden;
        }


        .custom-div-icon {
          background: transparent;
          border: none;
        }

        .pin {
          width: 30px;
          height: 30px;
          border-radius: 50% 50% 50% 0;
          background: #e63946;
          position: absolute;
          transform: rotate(-45deg);
          left: 50%;
          top: 50%;
          margin: -15px 0 0 -15px;
          box-shadow: 0 3px 5px rgba(0,0,0,0.3);
        }
        

        .pin::after {
          content: '';
          width: 14px;
          height: 14px;
          margin: 8px 0 0 8px;
          background: #fff;
          position: absolute;
          border-radius: 50%;
        }


        .pulse {
          background: rgba(230, 57, 70, 0.4);
          border-radius: 50%;
          height: 14px;
          width: 14px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin: 11px 0px 0px -12px;
          transform: rotateX(55deg);
          z-index: -2;
        }

        .pulse::after {
          content: "";
          border-radius: 50%;
          height: 40px;
          width: 40px;
          position: absolute;
          margin: -13px 0 0 -13px;
          animation: pulsate 1.5s ease-out;
          animation-iteration-count: infinite;
          opacity: 0;
          box-shadow: 0 0 1px 2px #e63946;
          animation-delay: 1.1s;
        }

        @keyframes pulsate {
          0% {
            transform: scale(0.1, 0.1);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(1.2, 1.2);
            opacity: 0;
          }
        }


        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .leaflet-popup-content {
          margin: 0 !important;
          width: 240px !important;
        }
        .leaflet-popup-tip {
          background: white;
        }
        

        .popup-card {
          display: flex;
          flex-direction: column;
        }

        .popup-image-container {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: hidden;
        }

        .popup-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .popup-card:hover .popup-image {
          transform: scale(1.1);
        }

.popup-content {
    text-align: center;
    background: #fff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
        
        .popup-title {
          font-family: 'Cormorant Garamond'; 
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
          display: block;
          color: #333;
          text-align: left;
        }

.popup-link {
    font-family: Inter;
    font-size: 13px;
    text-decoration: none;
    transition: all .3s;
    color: #c21b1a !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-weight: 500;
}

        .popup-link:hover {
          border-bottom-color: #c21b1a;
          opacity: 0.8;
        }
          .leaflet-container a.leaflet-popup-close-button{font-size: 26px !important; color: #fff !important;}
      `}</style>

      <MapContainer
        center={[18.1096, -77.2975]}
        zoom={4}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        touchZoom={false}
        dragging={true}
        style={{ height: "100%", width: "100%" }}
      >


        <TileLayer
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        />


        {locations.map((loc) => (
          <LocationMarker key={loc.name} loc={loc} customIcon={customIcon} />
        ))}

      </MapContainer>
    </div>
  );
};

export default Locationmap;