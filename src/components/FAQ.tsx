import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is this just another to-do app?",
    answer: "No. Quiet Control proposes a minimum-effective routine across life areas and slots it into her week. She validates — no building from scratch.",
  },
  {
    question: "Do I need to use AI?",
    answer: "No. AI is optional via OpenRouter. If it's unavailable, the manual experience still works perfectly.",
  },
  {
    question: "What's the \"Founding 500\"?",
    answer: "The first 500 members get a lifetime price lock and bonus routine packs. Limited on purpose.",
  },
  {
    question: "When do cohorts start?",
    answer: "Every Monday. Join the waitlist and we'll email your start date.",
  },
  {
    question: "How long does onboarding take?",
    answer: "2 minutes maximum. If it takes longer, your first month is free when subscriptions open.",
  },
  {
    question: "What areas does Quiet Control cover?",
    answer: "Body, Food, Home, Appearance, Finances, and Career. Each area gets minimum-effective routines based on your priorities and time budget.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto px-4 sm:px-6 lg:px-8 container-tight py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8 text-center animate-fade-in">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-soft transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-smooth focus:outline-none focus:bg-neutral-50"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-neutral-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-neutral-100">
                  <p className="text-neutral-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;