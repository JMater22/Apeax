import { type ReactNode } from "react";
import { Container } from "@/components/layout/container";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <h1 className="text-center font-condensed text-3xl uppercase tracking-wide text-apeax-cod-gray">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-center font-body text-sm text-apeax-cod-gray/60">{subtitle}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </Container>
  );
}