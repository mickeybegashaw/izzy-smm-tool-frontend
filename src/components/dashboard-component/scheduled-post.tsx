import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MoreHorizontal } from "lucide-react"

const scheduled = [
  {
    id: 1,
    platform: "Twitter",
    content: "New blog post: 10 Tips for Better Social Media Engagement",
    scheduledFor: "Today at 3:00 PM",
    status: "scheduled",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    platform: "Instagram",
    content: "Product showcase - Summer collection preview",
    scheduledFor: "Tomorrow at 10:00 AM",
    status: "scheduled",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 3,
    platform: "Facebook",
    content: "Join us for a live Q&A session this Friday!",
    scheduledFor: "Friday at 2:00 PM",
    status: "scheduled",
    color: "from-blue-600 to-blue-700",
  },
]

export function ScheduledPosts() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Scheduled Posts</h3>
          <p className="text-sm text-muted-foreground mt-1">Upcoming content</p>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          View Calendar
        </Button>
      </div>

      <div className="space-y-3">
        {scheduled.map((post) => (
          <div
            key={post.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-accent transition-colors"
          >
            <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${post.color} shrink-0`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground mb-1">{post.content}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {post.scheduledFor}
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-background transition-colors">
              <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  )
}
