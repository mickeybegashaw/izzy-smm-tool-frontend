import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "SocialFlow has transformed how we manage our social media. The scheduling feature saves us hours every week, and the analytics are incredibly insightful.",
      avatar: "/professional-woman-diverse.png",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Social Media Manager",
      company: "Creative Agency",
      content:
        "The AI content assistant is a game-changer. It helps us generate creative captions and hashtags that actually work. Our engagement has increased by 150%!",
      avatar: "/professional-man.jpg",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Content Creator",
      company: "Lifestyle Brand",
      content:
        "As a solo creator, I need tools that are powerful yet easy to use. SocialFlow gives me everything I need to manage my brand across multiple platforms effortlessly.",
      avatar: "/creative-woman.png",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 sm:py-32" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Loved by creators and teams worldwide
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of satisfied customers who have transformed their social media management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-purple-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
