import { Header } from "@/components/root-components/header"
import { HeroSection } from "@/components/root-components/hero-section"
import { StatsSection } from "@/components/root-components/stats-section"
import { FeaturesSection } from "@/components/root-components/features-section"
import { PlatformsSection } from "@/components/root-components/platforms-section"
import { TestimonialsSection } from "@/components/root-components/testimonials-section"
import { CTASection } from "@/components/root-components/cta-section"
import { Footer } from "@/components/root-components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <PlatformsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
