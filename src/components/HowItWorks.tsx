import { Brain, Sparkles, CheckCircle2, PlugZap } from "lucide-react";

export default function HowItWorks() {
  const items = [
    { icon: Sparkles, title: "2-minute onboarding", desc: "Kick off with a tiny setup — you’re done before the kettle boils." },
    { icon: Brain, title: "Intelligent agenda", desc: "The plan adapts to your week, energy, and constraints." },
    { icon: CheckCircle2, title: "Daily check-up (optional)", desc: "A nudge if you want it. Skip without guilt." },
    { icon: PlugZap, title: "AI assist — plug-in, not lock-in", desc: "Bring your tools. Leave anytime. No hostage vibes." },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How it works</h2>

        {/* grade 2x2 fixa */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-neutral-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
