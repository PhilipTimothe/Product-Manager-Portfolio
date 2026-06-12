"use client";

import dynamic from "next/dynamic";

const DarbyCase = dynamic(() => import("./DarbyCase"), { ssr: true });

export default function DarbyPage() {
  return <DarbyCase />;
}
