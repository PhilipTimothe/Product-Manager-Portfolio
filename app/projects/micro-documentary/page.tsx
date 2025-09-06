"use client";

import dynamic from "next/dynamic";

const MicroDocumentaryCase = dynamic(() => import("./MicroDocumentaryCase"), { ssr: true });

export default function MicroDocumentaryPage() {
  return <MicroDocumentaryCase />;
}