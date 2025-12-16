import { DashboardHeader } from "@/components/dashboard-component/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-component/dashboard-sidebar";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard - Izzy",
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/signin");
  return (
    <main className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
