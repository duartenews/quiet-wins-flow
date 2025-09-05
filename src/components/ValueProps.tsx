import { TrendingUpIcon, BrainIcon, GiftIcon } from "lucide-react";

const valueProps = [
  {
    icon: TrendingUpIcon,
    title: "Micro-wins, not burnout",
    description: "5–15 minute tasks that keep her life balanced while she climbs.",
  },
  {
    icon: BrainIcon,
    title: "Decision-light by design",
    description: "We propose the routine. She just validates. Less friction, more consistency.",
  },
  {
    icon: GiftIcon,
    title: "Founding 500 perks",
    description: "Lifetime price lock + ready-made packs for Body, Home, Hair, Skin, Food, Finance, Career.",
  },
];

const ValueProps = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 container-tight py-16">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {valueProps.map((prop, index) => (
          <div
            key={prop.title}
            className="border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-soft hover:border-primary/30 transition-smooth animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <prop.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{prop.title}</h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;