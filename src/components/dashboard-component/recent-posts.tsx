import { Card } from "@/components/ui/card"
import { MessageSquare, Heart, Share2, Eye } from "lucide-react"

const posts = [
  {
    id: 1,
    platform: "Twitter",
    content: "Just launched our new feature! Check it out 🚀",
    time: "2 hours ago",
    likes: 342,
    comments: 28,
    shares: 45,
    views: 1243,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    platform: "Instagram",
    content: "Behind the scenes of our latest photoshoot",
    time: "5 hours ago",
    likes: 892,
    comments: 64,
    shares: 23,
    views: 3421,
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 3,
    platform: "LinkedIn",
    content: "Excited to announce our new partnership with...",
    time: "1 day ago",
    likes: 156,
    comments: 12,
    shares: 89,
    views: 2134,
    color: "from-blue-700 to-blue-800",
  },
]

export function RecentPosts() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Posts</h3>
          <p className="text-sm text-muted-foreground mt-1">Your latest activity</p>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 rounded-lg bg-muted hover:bg-accent transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${post.color} shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-foreground">{post.platform}</span>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                <p className="text-sm text-foreground line-clamp-2">{post.content}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5" />
                {post.likes}
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                {post.comments}
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" />
                {post.shares}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {post.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
