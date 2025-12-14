import { Card } from "@/components/ui/card"
import { Calendar, BarChart3, Users, Sparkles, MessageSquare, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Plan and schedule content across all platforms. Our AI suggests optimal posting times for maximum reach and engagement.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your performance. Track engagement, reach, and ROI with beautiful, easy-to-understand reports.",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work seamlessly with your team. Assign tasks, review content, and manage permissions all in one place.",
      gradient: "from-purple-500 to-teal-500",
    },
    {
      icon: Sparkles,
      title: "AI Content Assistant",
      description:
        "Generate engaging captions, hashtags, and content ideas powered by advanced AI. Never run out of content inspiration.",
      gradient: "from-teal-500 to-purple-500",
    },
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description:
        "Manage all your messages, comments, and mentions from one centralized inbox. Never miss an important interaction.",
      gradient: "from-purple-600 to-purple-700",
    },
    {
      icon: Zap,
      title: "Multi-Platform Support",
      description:
        "Connect Instagram, Facebook, Twitter, LinkedIn, TikTok, and more. Manage everything from a single dashboard.",
      gradient: "from-teal-600 to-teal-700",
    },
  ]

  return (
    <section className="py-20 sm:py-32" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Powerful tools designed to help you create, schedule, and analyze your social media content like never
            before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300  group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-sans font-semibold text-xl text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
