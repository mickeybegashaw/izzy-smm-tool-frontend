import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Heart, MessageSquare, Share2 } from "lucide-react"

const stats = [
  {
    name: "Total Followers",
    value: "124.5K",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    name: "Engagement Rate",
    value: "8.4%",
    change: "+2.3%",
    trend: "up",
    icon: Heart,
  },
  {
    name: "Posts This Month",
    value: "42",
    change: "-5.2%",
    trend: "down",
    icon: MessageSquare,
  },
  {
    name: "Total Shares",
    value: "3.2K",
    change: "+18.7%",
    trend: "up",
    icon: Share2,
  },
]

export function OverviewStats() {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
        return (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-chart-2" : "text-destructive"
                }`}
              >
                <TrendIcon className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.name}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
