import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 rounded-full bg-linear-to-r from-purple-500/10 to-teal-500/10 border border-purple-500/20 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            <span className="text-sm font-medium bg-linear-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              Now with AI-powered content creation
            </span>
          </div>

          <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
            Your social media,
            <span className="bg-linear-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              simplified
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            Manage all your social channels from one powerful dashboard. Schedule posts, engage with your audience, and
            grow your brand with AI-powered insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="text-base w-full sm:w-auto bg-linear-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white shadow-lg shadow-purple-500/25"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base w-full sm:w-auto border-purple-200 hover:bg-purple-50 hover:border-purple-300 bg-transparent"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative rounded-xl border border-purple-200/50 bg-linear-to-b from-white to-purple-50/30 p-2 shadow-2xl shadow-purple-500/10">
            <div className="aspect-video rounded-lg bg-linear-to-br from-purple-100 via-teal-50 to-purple-100 flex items-center justify-center">
              <img
                src="/modern-social-media-dashboard-with-purple-and-teal.jpg"
                alt="SocialFlow Dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
