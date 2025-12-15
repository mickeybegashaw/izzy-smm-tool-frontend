"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "./dashboard-sidebar"
import { Menu } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image src="/izzy-logo-white.png" alt="Izzy Logo" width={70} height={40} />
        </Link>
        <div
            onClick={() => setMobileOpen(true)}
            className="p-2 text-white cursor-pointer"
          >
            <Menu className="w-6 h-6" />
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </header>
  )
}
