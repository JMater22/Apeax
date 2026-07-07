import { PageHeader } from "@/components/shared/page-header";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />
      <div className="px-6 py-16 md:px-12">
        <p className="text-muted-foreground">Company story coming in Sprint 6.</p>
      </div>
    </>
  );
}