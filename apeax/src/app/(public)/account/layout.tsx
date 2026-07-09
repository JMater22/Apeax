import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/layout/container";
import { AccountSidebar } from "@/components/shared/account-sidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="My Account" />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
          <AccountSidebar />
          <div>{children}</div>
        </div>
      </Container>
    </>
  );
}