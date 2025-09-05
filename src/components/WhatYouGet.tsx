import heroImage from "@/assets/hero-image.jpg";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

        {/* Coluna direita: imagem 100% maior (2x) */}
        <div className="lg:pl-8">
          <div className="transform scale-[2] origin-top-left">
            <img
              src={heroImage}
              alt="App preview"
              className="w-full h-auto rounded-2xl border border-neutral-200"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
