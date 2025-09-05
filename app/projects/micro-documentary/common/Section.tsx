import { type ReactNode } from "react";
import { Container } from "@/components/container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: string;
}

export function Section({
  children,
  className = "",
  background = "bg-cream",
}: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${background} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}