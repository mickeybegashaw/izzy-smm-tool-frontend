"use client";
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
    <div>
      dashboard
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
};

export default DashboardPage;
