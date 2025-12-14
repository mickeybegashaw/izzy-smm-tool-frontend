"use client"
import {LogOut, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SidebarProps {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

export function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const navItems = [
    { name: "Features" ,path:"#features" },
    { name: "Pricing" ,path:"#pricing" },
    { name: "Testimonial" , path:"#testimonials"},
    { name: "Resources" ,path:"#"},
    { name: "Sign In" , path:"/signin"}
  ]

  return (
    <>
      {mobileOpen&& <aside
        className={`
          fixed md:static top-0 right-0 h-screen z-40
          bg-sidebar text-sidebar-foreground border-r border-sidebar-border
          flex flex-col transition-all duration-300 
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full w-0 md:translate-x-0 md:w-64"}
        `}
      >
        {/* Close button on mobile */}
        <div className="md:hidden flex justify-end p-4">
          <Button variant="ghost" onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col mt-4">
          {navItems.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 p-3 text-sm font-medium rounded-lg hover:bg-sidebar-accent/10 transition-colors ${item.name === "Sign In" ? "bg-primary text-bold w-[90%] mx-auto " : ""}`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-sidebar-border flex flex-col gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 justify-start text-sm font-medium hover:bg-sidebar-accent/10"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </aside>}

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed bg-black/40 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  )
}
