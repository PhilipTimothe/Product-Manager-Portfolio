"use client";

import dynamic from "next/dynamic";

const CatchUpTeddyCase = dynamic(() => import("./CatchUpTeddyCase"), {
  ssr: true,
});

export default function CatchUpTeddyPage() {
  return <CatchUpTeddyCase />;
}
