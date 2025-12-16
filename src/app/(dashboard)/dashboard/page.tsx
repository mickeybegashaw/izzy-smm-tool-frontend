import { DashboardSidebar } from "@/components/dashboard-component/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-component/dashboard-header"
import { OverviewStats } from "@/components/dashboard-component/overview"
import { EngagementChart } from "@/components/dashboard-component/engagement-chart"
import { RecentPosts } from "@/components/dashboard-component/recent-posts"
import { ScheduledPosts } from "@/components/dashboard-component/scheduled-post"
import { QuickActions } from "@/components/dashboard-component/quick-action"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your accounts.</p>
            </div>
            <QuickActions />
          </div>

          <OverviewStats />

          <div className="grid gap-6 lg:grid-cols-2">
            <EngagementChart />
            <RecentPosts />
          </div>

          <ScheduledPosts />
        </main>
      </div>
    </div>
  )
}
