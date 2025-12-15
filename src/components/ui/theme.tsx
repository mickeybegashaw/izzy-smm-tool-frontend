"use client"

import { useEffect } from "react"

export default function Theme({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"

    const theme = savedTheme ?? systemTheme
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  return <>{children}</>
}
