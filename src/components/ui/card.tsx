import type * as React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const hoverStyles = hover ? "hover:shadow-xl hover:border-purple-200 transition-all duration-300" : ""

  return (
    <div className={`bg-foreground/5 rounded-xl border border-gray-200 shadow-sm ${hoverStyles} ${className}`}>{children}</div>
  )
}
