import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/layout/container";

export default function AccountLoading() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-full" />
          ))}
        </div>
        <div>
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-4 h-32 w-full max-w-sm" />
        </div>
      </div>
    </Container>
  );
}