"use client"

import { Card } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function EngagementChart() {
  const data = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 78 },
    { day: "Wed", value: 52 },
    { day: "Thu", value: 85 },
    { day: "Fri", value: 92 },
    { day: "Sat", value: 45 },
    { day: "Sun", value: 98 },
  ]

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Engagement Overview</h3>
          <p className="text-sm text-muted-foreground mt-1">Last 7 days</p>
        </div>
        <div className="p-2 rounded-lg bg-primary/10">
          <BarChart3 className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.day} className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground w-10">{item.day}</span>
            <div className="flex-1 h-10 bg-muted rounded-lg overflow-hidden relative">
              <div
                className="h-full bg-linear-to-r from-primary to-chart-2 rounded-lg transition-all duration-500"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-foreground">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
