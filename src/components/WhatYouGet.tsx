export default function WhatYouGet() {
  // Bullets da esquerda (sem EN/PT-BR)
  const features: string[] = [
    "A 'Today' view with 3–6 focused blocks — not 25 noisy tasks.",
    "Minimum-effective routines across Body, Food, Home, Appearance, Finances, Career.",
    "One-tap ‘Accept all for the week’.",
    "Streaks and weekly goals to reinforce micro-wins.",
  ];

  // Cards de perks
  const perks = [
    {
      title: "Founding 500",
      desc: "Save big now, keep the same price forever.",
      badge: "LIMITED",
    },
    {
      title: "Cohorts every Monday",
      desc: "Rolling admission to keep support and onboarding clean.",
    },
    {
      title: "Risk-free start",
      desc: "Onboarding ≤ 2 minutes or your first month is free (when subscriptions open).",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Coluna esquerda */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What you’ll get</h2>

          {/* Bullet list */}
          <ul className="mt-6 space-y-4 list-disc pl-6 marker:text-neutral-300">
            {features.map((text) => (
              <li key={text} className="text-neutral-700">
                {text}
              </li>
            ))}
          </ul>

          {/* Perks cards */}
          <div className="mt-8 space-y-4">
            {perks.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-neutral-600 mt-2">{p.desc}</p>
                  </div>
                  {p.badge ? (
                    <span className="text-xs rounded-full border border-neutral-300 px-2 py-1 text-neutral-600">
                      {p.badge}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita: SVG inline, levemente ampliado */}
        <div className="lg:pl-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative transform scale-[1.5] origin-top-left">
            <svg
              className="w-full rounded-2xl border border-neutral-200 shadow-soft"
              viewBox="0 0 920 520"
              fill="none"
              role="img"
              aria-labelledby="app-preview-title"
            >
              <title id="app-preview-title">Quiet Control App Preview</title>
              <rect x="1" y="1" width="918" height="518" rx="16" fill="white"></rect>
              <rect x="1" y="1" width="918" height="518" rx="16" stroke="hsl(var(--neutral-200))"></rect>

              <g transform="translate(40,40)">
                <rect width="260" height="140" rx="12" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <text x="20" y="36" fontFamily="Inter" fontSize="18" fill="hsl(var(--foreground))" fontWeight="700">
                  1. Choose focus
                </text>
                <rect x="20" y="60" width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <circle cx="222" cy="80" r="6" fill="hsl(var(--primary))"></circle>
                <text x="34" y="86" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))" fontWeight="600">
                  Body
                </text>
                <rect x="20" y="110" width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <circle cx="222" cy="130" r="6" fill="hsl(var(--primary))"></circle>
                <text x="34" y="136" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))" fontWeight="600">
                  Home
                </text>
                <text x="20" y="180" fontFamily="Inter" fontSize="12" fill="hsl(var(--neutral-500))">
                  Pick your priority in seconds.
                </text>
              </g>

              <g transform="translate(330,40)">
                <rect width="260" height="140" rx="12" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <text x="20" y="36" fontFamily="Inter" fontSize="18" fill="hsl(var(--foreground))" fontWeight="700">
                  2. Set time
                </text>
                <text x="20" y="68" fontFamily="Inter" fontSize="12" fill="hsl(var(--neutral-600))">
                  How many minutes per day?
                </text>
                <rect x="20" y="84" width="120" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <text x="34" y="110" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))">
                  10 min
                </text>
                <text x="20" y="146" fontFamily="Inter" fontSize="12" fill="hsl(var(--neutral-600))">
                  Goal timeline?
                </text>
                <rect x="20" y="162" width="120" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <text x="34" y="188" fontFamily="Inter" fontSize="14" fill="hsl(var(--foreground))">
                  21 days
                </text>
              </g>

              <g transform="translate(620,40)">
                <rect width="260" height="140" rx="12" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <text x="20" y="36" fontFamily="Inter" fontSize="18" fill="hsl(var(--foreground))" fontWeight="700">
                  3. Accept your week
                </text>
                <g transform="translate(20,60)">
                  <rect width="220" height="24" rx="8" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <circle cx="12" cy="12" r="6" fill="hsl(var(--primary))"></circle>
                  <text x="30" y="16" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))">
                    Accept all
                  </text>
                </g>
                <g transform="translate(20,94)">
                  <rect width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <text x="16" y="28" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))">
                    Hydrate • 2L • Daily
                  </text>
                </g>
                <g transform="translate(20,144)">
                  <rect width="220" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <text x="16" y="28" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))">
                    Home reset • 7m • Weekly
                  </text>
                </g>
              </g>

              <g transform="translate(340,240)">
                <rect width="240" height="240" rx="16" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                <text x="20" y="36" fontFamily="Inter" fontSize="16" fill="hsl(var(--foreground))" fontWeight="700">
                  Today View
                </text>
                <g transform="translate(20,60)">
                  <rect width="200" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <circle cx="180" cy="20" r="6" fill="hsl(var(--primary))"></circle>
                  <text x="16" y="26" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))" fontWeight="600">
                    Body • 10m
                  </text>
                </g>
                <g transform="translate(20,110)">
                  <rect width="200" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <circle cx="180" cy="20" r="6" fill="hsl(var(--primary))"></circle>
                  <text x="16" y="26" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))" fontWeight="600">
                    Home • 7m
                  </text>
                </g>
                <g transform="translate(20,160)">
                  <rect width="200" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <circle cx="180" cy="20" r="6" fill="hsl(var(--primary))"></circle>
                  <text x="16" y="26" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))" fontWeight="600">
                    Hair • 5m
                  </text>
                </g>
                <g transform="translate(20,210)">
                  <rect width="200" height="40" rx="10" fill="white" stroke="hsl(var(--neutral-200))"></rect>
                  <circle cx="180" cy="20" r="6" fill="hsl(var(--primary))"></circle>
                  <text x="16" y="26" fontFamily="Inter" fontSize="12" fill="hsl(var(--foreground))" fontWeight="600">
                    Finance • 8m
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
