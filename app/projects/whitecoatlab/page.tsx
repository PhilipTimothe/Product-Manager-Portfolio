"use client";

import dynamic from "next/dynamic";

const WhiteCoatLabCase = dynamic(() => import("./WhiteCoatLabCase"), { ssr: true });

export default function WhiteCoatLabPage() {
  return <WhiteCoatLabCase />;
}