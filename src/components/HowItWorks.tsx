import { ClockIcon, CalendarIcon, TrendingUpIcon, SparklesIcon } from "lucide-react";

const steps = [
  {
    icon: ClockIcon,
    title: "2-minute onboarding",
    description: "A 5-question intake identifies priorities, time budget, and deadlines. Your plan is ready today.",
  },
  {
    icon: CalendarIcon,
    title: "Intelligent agenda",
    description: "We propose the minimum-effective micro-tasks by area and cadence (Daily / Weekly / Bi-weekly / Monthly). You accept or edit.",
  },
  {
    icon: TrendingUpIcon,
    title: "Daily check-up (optional)",
    description: "2–3 quick questions recalibrate your week around energy and focus — without the mental load.",
  },
  {
    icon: SparklesIcon,
    title: "AI assist — plug-in, not lock-in",
    description: "Optional AI via OpenRouter for deeper prompts and planning. If AI is down, your manual flow still works perfectly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="mx-auto px-4 sm:px-6 lg:px-8 container-tight py-16 sm:py-24">
      <div className="max-w-2xl animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          How it works
        </h2>
        <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
          Made for women with big goals: minimum decisions, maximum clarity, micro-wins that compound.
        </p>
      </div>

      <div className="mt-12 grid grid-auto-fit gap-8 lg:gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group border border-neutral-200 rounded-2xl p-6 lg:p-8 hover:shadow-soft hover:border-primary/30 transition-smooth animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;