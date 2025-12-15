"use client";
import { LogOut, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    fetchUser();
  }, [supabase]);
  console.log(user);


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    alert("signed out");
    router.push("/signin");
  };


  return (
    <>
      {mobileOpen && (
        <aside
          className={`
          fixed top-0 right-0 h-screen z-40
          bg-sidebar text-sidebar-foreground border-r border-sidebar-border
          flex flex-col transition-all duration-300 
          ${
            mobileOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full w-0 md:translate-x-0 md:w-64"
          }
        `}
        >
          {/* Close button on mobile */}
          <div className="flex justify-between p-4">
            <ThemeToggle />
            <Button variant="ghost" onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col mt-4">
            <div className="flex gap-2">
              <User />
              {!loading ? user.user_metadata.company_name || user?.email: "loading..."}
            </div>
          </div>


           {/* Bottom actions */}
        <div className="p-4 border-t border-sidebar-border flex flex-col gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 justify-start text-sm font-medium hover:bg-sidebar-accent/10"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5" /> <span>Log Out</span>
          </Button>
        </div>
        </aside>
      )}

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed bg-black/40 z-30"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  );
}
