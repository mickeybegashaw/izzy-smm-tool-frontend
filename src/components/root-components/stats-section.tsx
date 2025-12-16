export function StatsSection() {
  const stats = [
    { value: "30+", label: "Active users" },
    { value: "150", label: "Posts scheduled" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "User rating" },
  ]

  return (
    <section className="py-16 border-y border-border/40 bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-bold text-3xl sm:text-4xl bg-linear-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
