import { Skeleton } from "@/components/ui/skeleton";
import { Container } from "@/components/layout/container";

export default function ProductDetailLoading() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <Skeleton className="aspect-[4/5] w-full" />
        <div>
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="mt-3 h-6 w-24" />
          <Skeleton className="mt-6 h-16 w-full" />
          <Skeleton className="mt-8 h-11 w-full" />
        </div>
      </div>
    </Container>
  );
}