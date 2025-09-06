"use client";

import dynamic from "next/dynamic";

const SalaryPredictionCase = dynamic(() => import("./SalaryPredictionCase"), { ssr: true });

export default function SalaryPredictionPage() {
  return <SalaryPredictionCase />;
}