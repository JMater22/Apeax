import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/layout/container";

export default function CartLoading() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="flex flex-col gap-6 md:col-span-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4 border-b border-apeax-westar pb-6">
              <Skeleton className="h-24 w-20 shrink-0" />
              <div className="flex-1">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="mt-2 h-3 w-1/4" />
                <Skeleton className="mt-4 h-8 w-24" />
              </div>
            </div>
          ))}
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    </Container>
  );
}