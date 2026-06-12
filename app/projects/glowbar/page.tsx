"use client";

import dynamic from "next/dynamic";

const GlowbarCase = dynamic(() => import("./GlowbarCase"), { ssr: true });

export default function GlowbarPage() {
  return <GlowbarCase />;
}
