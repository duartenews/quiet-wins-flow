import { CheckIcon, StarIcon, UsersIcon, ShieldCheckIcon } from "lucide-react";

const features = [
  "A 'Today' view with 3–6 focused blocks — not 25 noisy tasks.",
  "Minimum routines across Body, Food, Home, Appearance, Finances, Career.",
  "One-tap 'Accept all for the week'.",
  "Streaks and weekly goals to reinforce micro-wins.",
  "EN + PT-BR at launch. Offline basics to mark done.",
];

const benefits = [
  {
    icon: StarIcon,
    title: "Founding 500",
    description: "Lifetime price lock + early access + bonus packs for women's routines.",
    badge: "Limited",
  },
  {
    icon: UsersIcon,
    title: "Cohorts every Monday",
    description: "Rolling admission to keep support and onboarding clean.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk-free start",
    description: "Onboarding ≤ 2 minutes or your first month is free (when subscriptions open).",
  },
];

const WhatYouGet = () => {
  return (
    <section id="what" className="mx-auto px-4 sm:px-6 lg:px-8 container-tight py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What you'll get
          </h2>
          
          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex gap-3 text-neutral-700 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary text-lg mt-1">•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-neutral-200 p-6 hover:shadow-soft hover:border-primary/30 transition-smooth animate-slide-up"
                style={{ animationDelay: `${(index + features.length) * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  {benefit.badge && (
                    <span className="text-xs uppercase tracking-wide text-primary border border-primary px-2 py-1 rounded-full font-medium">
                      {benefit.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* App Preview Illustration */}
        <div className="lg:pl-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <svg
              className="w-full rounded-2xl border border-neutral-200 shadow-soft"
              viewBox="0 0 920 520"
              fill="none"
              role="img"
              aria-labelledby="app-preview-title"
            >
              <title id="app-preview-title">Quiet Control App Preview</title>
              
              <rect x="1" y="1" width="918" height="518" rx="16" fill="white"/>
              <rect x="1" y="1" width="918" height="518" rx="16" stroke="hsl(var(--neutral-200))"/>

              {/* Step 1: Choose focus */}
              <g transform="translate(40,40)">
                <rect width="260" height="140" rx="12" fill="white" stroke="hsl(var(--neutral-200))"/>
                <text x="20" y="36" fontFamily="Inter" fontSize="18" fill="hsl(var(--foreground))" fontWeight="700">
                  1. Choose focus
                </text>
                
                {/* Priority items */}
                <rect x="20" y="60" width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                <circle cx="222" cy="80" r="6" fill="hsl(var(--primary))"/>
                <text x="34" y="86" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))" fontWeight="600">
                  Body
                </text>
                
                <rect x="20" y="110" width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                <circle cx="222" cy="130" r="6" fill="hsl(var(--primary))"/>
                <text x="34" y="136" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))" fontWeight="600">
                  Home
                </text>
                
                <text x="20" y="180" fontFamily="Inter" fontSize="12" fill="hsl(var(--neutral-500))">
                  Pick your priority in seconds.
                </text>
              </g>

              {/* Step 2: Set time */}
              <g transform="translate(330,40)">
                <rect width="260" height="140" rx="12" fill="white" stroke="hsl(var(--neutral-200))"/>
                <text x="20" y="36" fontFamily="Inter" fontSize="18" fill="hsl(var(--foreground))" fontWeight="700">
                  2. Set time
                </text>
                
                <text x="20" y="68" fontFamily="Inter" fontSize="12" fill="hsl(var(--neutral-600))">
                  How many minutes per day?
                </text>
                <rect x="20" y="84" width="120" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                <text x="34" y="110" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))">
                  10 min
                </text>
                
                <text x="20" y="146" fontFamily="Inter" fontSize="12" fill="hsl(var(--neutral-600))">
                  Goal timeline?
                </text>
                <rect x="20" y="162" width="120" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                <text x="34" y="188" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))">
                  21 days
                </text>
              </g>

              {/* Step 3: Accept plan */}
              <g transform="translate(620,40)">
                <rect width="260" height="140" rx="12" fill="white" stroke="hsl(var(--neutral-200))"/>
                <text x="20" y="36" fontFamily="Inter" fontSize="18" fill="hsl(var(--foreground))" fontWeight="700">
                  3. Accept your week
                </text>
                
                <g transform="translate(20,60)">
                  <rect width="220" height="24" rx="8" fill="white" stroke="hsl(var(--neutral-200))"/>
                  <circle cx="12" cy="12" r="6" fill="hsl(var(--primary))"/>
                  <text x="30" y="16" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))">
                    Accept all
                  </text>
                </g>
                
                <g transform="translate(20,94)">
                  <rect width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                  <text x="16" y="28" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))">
                    Hydrate • 2L • Daily
                  </text>
                </g>
                
                <g transform="translate(20,144)">
                  <rect width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                  <text x="16" y="28" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))">
                    Home reset • 7m • Weekly
                  </text>
                </g>
              </g>

              {/* Today View */}
              <g transform="translate(340,240)">
                <rect width="240" height="240" rx="16" fill="white" stroke="hsl(var(--neutral-200))"/>
                <text x="20" y="36" fontFamily="Inter" fontSize="16" fill="hsl(var(--foreground))" fontWeight="700">
                  Today View
                </text>
                
                {/* Task blocks */}
                {[
                  { y: 60, text: "Body • 10m", color: "hsl(var(--primary))" },
                  { y: 110, text: "Home • 7m", color: "hsl(var(--primary))" },
                  { y: 160, text: "Hair • 5m", color: "hsl(var(--primary))" },
                  { y: 210, text: "Finance • 8m", color: "hsl(var(--primary))" },
                ].map((task, i) => (
                  <g key={i} transform={`translate(20,${task.y})`}>
                    <rect width="200" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"/>
                    <circle cx="180" cy="20" r="6" fill={task.color}/>
                    <text x="16" y="26" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))" fontWeight="600">
                      {task.text}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;