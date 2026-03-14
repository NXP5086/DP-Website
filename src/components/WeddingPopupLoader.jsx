"use client";

import dynamic from "next/dynamic";

const Weddingpopupform = dynamic(
    () => import("./forms/Weddingpopupform"),
    { ssr: false, loading: () => null }
);

export default function WeddingPopupLoader() {
    return <Weddingpopupform />;
}
