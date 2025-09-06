"use client";

import dynamic from "next/dynamic";

const LoanDefaultRiskCase = dynamic(() => import("./LoanDefaultRiskCase"), { ssr: true });

export default function LoanDefaultRiskPage() {
  return <LoanDefaultRiskCase />;
}