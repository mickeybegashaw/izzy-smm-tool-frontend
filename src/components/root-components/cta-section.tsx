import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-teal-600 -z-10" />
      <div className="absolute inset-0 bg-grid-white/10 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 text-balance">
            Ready to transform your social media?
          </h2>
          <p className="text-lg text-white/90 mb-10 text-pretty leading-relaxed">
            Join over 50,000 businesses and creators who are already saving time and growing their audience with
            SocialFlow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-50 shadow-xl"
            >
              Start your free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base w-full sm:w-auto border-white text-white hover:bg-white/10 bg-transparent"
            >
              Schedule a demo
            </Button>
          </div>
          <p className="text-sm text-white/80 mt-6">14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
