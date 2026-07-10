"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: send to a real error-tracking service (e.g. Sentry) once backend exists
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <h1 className="font-condensed text-4xl uppercase tracking-wide text-apeax-cod-gray">
        Something Went Wrong
      </h1>
      <p className="max-w-md font-body text-apeax-cod-gray/70">
        An unexpected error occurred. You can try again, or head back home.
      </p>
      <div className="flex gap-4">
        <Button
          variant="default"
          className="font-sans text-xs uppercase tracking-wide"
          onClick={reset}
        >
          Try Again
        </Button>
        <Link href="/">
          <Button variant="secondary" className="font-sans text-xs uppercase tracking-wide">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}