import { Instagram, Facebook, Youtube } from "lucide-react"

 function TikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-3.757-1.56 5.124 5.124 0 0 1-1.56-3.757h-3.75v13.52a2.72 2.72 0 1 1-2.72-2.72c.35 0 .685.067.995.186V7.42a6.47 6.47 0 0 0-.995-.078 6.47 6.47 0 1 0 6.47 6.47V8.77a8.86 8.86 0 0 0 5.317 1.757V6.77z"/>
    </svg>
  );
}


export function PlatformsSection() {
  const platforms = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500", bgColor: "bg-pink-50 hover:bg-pink-100" },
    { icon: Facebook, name: "Facebook", color: "text-blue-600", bgColor: "bg-blue-50 hover:bg-blue-100" },
    { icon: TikTok, name: "Twitter", color: "text-black", bgColor: "bg-sky-50 hover:bg-sky-100" },
    { icon: Youtube, name: "YouTube", color: "text-red-600", bgColor: "bg-red-50 hover:bg-red-100" },
  ]

  return (
    <section className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
            Connect all your platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Seamlessly integrate with all major social media platforms and manage them from one place
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                <div
                  className={`w-20 h-20 rounded-2xl ${platform.bgColor} border border-border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  <Icon className={`w-10 h-10 ${platform.color}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{platform.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
