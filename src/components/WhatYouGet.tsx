export default function WhatYouGet() {
  const features: string[] = [
    "A 'Today' view with 3–6 focused blocks — not 25 noisy tasks.",
    "Minimum-effective routines across Body, Food, Home, Appearance, Finances, Career.",
    "Streaks and weekly goals to reinforce micro-wins.",
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">What you’ll get</h2>

        <div className="mt-8 grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <svg
              className="w-full rounded-2xl border border-neutral-200/70"
              viewBox="0 0 920 520"
              fill="none"
              role="img"
              aria-labelledby="wyq-visual"
            >
              <title id="wyq-visual">Quiet Control – Visual</title>
              <rect x="1" y="1" width="918" height="518" rx="16" fill="white" />
              <rect x="1" y="1" width="918" height="518" rx="16" stroke="hsl(var(--neutral-200))" />

              <g transform="translate(56,56)">
                <rect width="240" height="120" rx="12" fill="white" stroke="hsl(var(--neutral-200))" />
                <rect x="20" y="28" width="88" height="16" rx="8" fill="hsl(var(--neutral-200))" />
                <rect x="20" y="60" width="90" height="28" rx="8" fill="white" stroke="hsl(var(--neutral-200))" />
                <rect x="118" y="60" width="90" height="28" rx="8" fill="white" stroke="hsl(var(--neutral-200))" />
              </g>

              <g transform="translate(340,56)">
                <rect width="240" height="120" rx="12" fill="white" stroke="hsl(var(--neutral-200))" />
                <rect x="20" y="28" width="70" height="16" rx="8" fill="hsl(var(--neutral-200))" />
                <rect x="20" y="76" width="200" height="6" rx="3" fill="hsl(var(--neutral-200))" />
                <circle cx="120" cy="79" r="10" fill="white" stroke="hsl(var(--primary))" strokeWidth="2" />
              </g>

              <g transform="translate(624,56)">
                <rect width="240" height="120" rx="12" fill="white" stroke="hsl(var(--neutral-200))" />
                <rect x="20" y="28" width="90" height="16" rx="8" fill="hsl(var(--neutral-200))" />
                <rect x="20" y="70" width="76" height="28" rx="14" fill="white" stroke="hsl(var(--neutral-200))" />
                <circle cx="52" cy="84" r="10" fill="hsl(var(--primary))" />
              </g>

              <g transform="translate(56,220)">
                <rect width="560" height="240" rx="16" fill="white" stroke="hsl(var(--neutral-200))" />
                <g transform="translate(20,50)">
                  <rect width="520" height="42" rx="10" fill="white" stroke="hsl(var(--neutral-200))" />
                  <circle cx="500" cy="71" r="6" fill="hsl(var(--primary))" />
                </g>
                <g transform="translate(20,104)">
                  <rect width="520" height="42" rx="10" fill="white" stroke="hsl(var(--neutral-200))" />
                  <circle cx="500" cy="125" r="6" fill="hsl(var(--primary))" />
                </g>
                <g transform="translate(20,158)">
                  <rect width="520" height="42" rx="10" fill="white" stroke="hsl(var(--neutral-200))" />
                  <circle cx="500" cy="179" r="6" fill="hsl(var(--primary))" />
                </g>
              </g>

              <g transform="translate(640,220)">
                <rect width="224" height="240" rx="16" fill="white" stroke="hsl(var(--neutral-200))" />
                <g transform="translate(16,24)">
                  <g>
                    <rect x="0" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="34" y="0" width="26" height="26" rx="6" fill="hsl(var(--neutral-200))" />
                    <rect x="68" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="102" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="136" y="0" width="26" height="26" rx="6" fill="hsl(var(--neutral-200))" />
                    <rect x="170" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                  </g>
                  <g transform="translate(0,32)">
                    <rect x="0" y="0" width="26" height="26" rx="6" fill="hsl(var(--neutral-200))" />
                    <rect x="34" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="68" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="102" y="0" width="26" height="26" rx="6" fill="hsl(var(--neutral-200))" />
                    <rect x="136" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="170" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                  </g>
                  <g transform="translate(0,64)">
                    <rect x="0" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="34" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="68" y="0" width="26" height="26" rx="6" fill="hsl(var(--neutral-200))" />
                    <rect x="102" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="136" y="0" width="26" height="26" rx="6" fill="white" stroke="hsl(var(--neutral-200))" />
                    <rect x="170" y="0" width="26" height="26" rx="6" fill="hsl(var(--neutral-200))" />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* Lista mais amigável */}
          <div className="order-1 lg:order-2 lg:pl-10 lg:max-w-prose">
            <ul className="space-y-6 text-neutral-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/70" />
                <p className="text-[15px] sm:text-base lg:text-[17px] leading-8">
                  <span className="font-semibold text-foreground">'Today' view</span> with 3–6 focused blocks — not 25 noisy tasks.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/70" />
                <p className="text-[15px] sm:text-base lg:text-[17px] leading-8">
                  <span className="font-semibold text-foreground">Minimum-effective routines</span> across Body, Food, Home, Appearance, Finances, Career.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/70" />
                <p className="text-[15px] sm:text-base lg:text-[17px] leading-8">
                  <span className="font-semibold text-foreground">Streaks & weekly goals</span> to reinforce micro-wins.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
