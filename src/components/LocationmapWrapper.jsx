"use client"

import dynamic from "next/dynamic"

const Locationmap = dynamic(() => import("./Locationmap"), {
    ssr: false,
    loading: () => <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-xl" />
})

export default function LocationmapWrapper() {
    return <Locationmap />
}
