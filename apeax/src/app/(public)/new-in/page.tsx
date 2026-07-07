import { PageHeader } from "@/components/shared/page-header";

export default function NewInPage() {
  return (
    <>
      <PageHeader title="New In" />
      <div className="px-6 py-16 md:px-12">
        <p className="text-muted-foreground">
          Latest Chapter and Newest Collection teasers coming in Sprint 2.
        </p>
      </div>
    </>
  );
}