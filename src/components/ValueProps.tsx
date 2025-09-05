import { BadgeCheck, Lock, Sparkles } from "lucide-react";

export default function ValueProps() {
  const props = [
    { icon: Sparkles, title: "Designed to be quiet", desc: "No feeds. No fluff. Just the few levers that move your week." },
    { icon: BadgeCheck, title: "Made for momentum", desc: "Micro-wins stack until the big ones feel inevitable." },
    // AJUSTE DE CÓPIA
    { icon: Lock, title: "Founding 500 perks", desc: "Save big now, keep the same price forever." },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <Icon className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-neutral-600 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
