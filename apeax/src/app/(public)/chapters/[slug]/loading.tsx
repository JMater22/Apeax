import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/layout/container";

export default function ChaptersLoading() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="aspect-[4/5] w-full" />
            <Skeleton className="mt-3 h-4 w-1/3" />
            <Skeleton className="mt-2 h-5 w-2/3" />
          </div>
        ))}
      </div>
    </Container>
  );
}