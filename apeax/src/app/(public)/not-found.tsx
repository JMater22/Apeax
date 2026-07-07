import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-condensed text-6xl uppercase text-foreground">404</h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-2 text-sm font-medium underline underline-offset-4 hover:text-foreground"
      >
        Back to home
      </Link>
    </div>
  );
}