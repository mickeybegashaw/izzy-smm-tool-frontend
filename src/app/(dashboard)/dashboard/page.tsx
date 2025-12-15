"use client";
import { Header } from "@/components/dashboard-component/dashboard-header";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
const DashboardPage = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    const supabase = createClient();
    supabase.auth.signOut();
    router.push("/signin");
    alert("signed out");
    router;
  };

  return (
    <main>
      <Header/>
    </main>
  );
};

export default DashboardPage;
