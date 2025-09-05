export default function WhatYouGet() {
  const features = [
    { title: "Minimum-effective routines", desc: "Do less, get more. Tiny habits that compound without burning you out." },
    { title: "Adaptive agenda", desc: "Adjusts to your season, constraints, and weekly reality." },
    { title: "Private by default", desc: "Your data stays yours. No noisy feeds, no social pressure." },
    // REMOVIDO: item EN/PT-BR
  ];

  const perks = [
    { title: "Foundational templates", desc: "Start with proven layouts and tune to your life." },
    { title: "Focus helpers", desc: "Micro-prompts and checklists for clarity in 30 seconds." },
    // Founding 500 por último com a nova copy:
    { title: "Founding 500", desc: "Save big now, keep the same price forever." },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Coluna esquerda: lista */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What you’ll get</h2>

          <div className="mt-8 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-neutral-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold">Perks</h3>
          <ul className="mt-4 space-y-4">
            {perks.map((p) => (
              <li key={p.title} className="flex flex-col">
                <span className="font-medium">{p.title}</span>
                <span className="text-neutral-600">{p.desc}</span>
              </li>
            ))}
          </ul>

          {/* Slogan no final */}
          <p className="mt-6 font-medium">
            Founding 500 — save big now, keep the same price forever.
          </p>
        </div>

        {/* Coluna direita: mesmo SVG inline, 100% maior (scale 2x) */}
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
