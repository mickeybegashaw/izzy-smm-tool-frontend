"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { Sidebar } from "./side-bar"
import { Menu } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image src="/izzy-logo.png" alt="Izzy Logo" width={70} height={40} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "Testimonials", "Resources"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3 ">
          <ThemeToggle />
          <Button variant="ghost" className="text-sm font-medium inline-flex">
            Sign in
          </Button>
          <Button className="text-sm block font-medium bg-linear-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white">
            Get started free
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileOpen(true)}
            className="p-2"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </header>
  )
}
