export default function FAQ() {
  const faqs = [
    {
      q: "What’s the “Founding 500”?",
      a: "The first 500 members lock in our best pricing. Save big now, keep the same price forever.",
    },
    {
      q: "Can I use my own tools?",
      a: "Yes. Bring your calendar, notes, and workflows. We work around them — plug-in, not lock-in.",
    },
    {
      q: "Is there a daily check-up?",
      a: "Optional. You can skip without losing momentum. The agenda adapts regardless.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
        <div className="mt-8 space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <h3 className="font-semibold">{q}</h3>
              <p className="text-neutral-600 mt-2">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
