"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  MessageSquare,
  Share2,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "Connected Accounts",
    href: "/dashboard/connected-accounts",
    icon:   Share2
,
  },
  { name: "Content Calendar", href: "/dashboard/content-calendar", icon: Calendar },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Posts", href: "/dashboard/posts", icon: MessageSquare },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user?.user_metadata);
      setLoading(false);
    }
    fetchUser();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/signin";
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          h-full w-64
          bg-card border-r border-border
          flex flex-col
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <Link href="/dashboard">
            <Image
              src="/izzy-logo.png"
              alt="Izzy Logo"
              width={60}
              height={60}
            />
          </Link>

          <button onClick={() => setOpen(false)} className="md:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3 px-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center bg-linear-to-br from-primary to-chart-2">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">
                {user?.company_name || (loading ? "Loading..." : "No name")}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {user?.full_name || (loading ? "Loading..." : "No email")}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </Button>
        </div>
      </aside>
    </>
  );
}
