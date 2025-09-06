import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this just another to-do app?",
      a: "No. Quiet Control proposes a minimum-effective routine across life areas and slots it into her week. She validates — no building from scratch.",
    },
    {
      q: "Do I need to use AI?",
      a: "No. AI is optional via OpenRouter. If it's unavailable, the manual experience still works perfectly.",
    },
    {
      q: "What’s the “Founding 500”?",
      a: "The first 500 members get a lifetime price lock and bonus routine packs. Limited on purpose.",
    },
    {
      q: "When do cohorts start?",
      a: "Every Monday. Join the waitlist and we'll email your start date.",
    },
    {
      q: "How long does onboarding take?",
      a: "2 minutes maximum. If it takes longer, your first month is free when subscriptions open.",
    },
    {
      q: "What areas does Quiet Control cover?",
      a: "Body, Food, Home, Appearance, Finances, and Career. Each area gets minimum-effective routines based on your priorities and time budget.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="rounded-2xl border border-neutral-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold focus:outline-none"
              >
                {q}
                <span className="ml-2 text-neutral-500">
                  {openIndex === i ? "–" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-neutral-600">{a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
