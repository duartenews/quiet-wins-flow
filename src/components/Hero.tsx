import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import { CheckIcon, ClockIcon, ShieldIcon } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    // TODO: Replace with actual API call
    toast({
      title: "You're on the waitlist! 🎉",
      description: "We'll email your cohort date soon.",
    });

    // Reset form
    setEmail("");
    setCity("");
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 container-tight py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Calm over chaos in{" "}
              <span className="relative">
                <span className="underline decoration-primary/60 underline-offset-4">21 days</span>
              </span>{" "}
              — built for ambitious women.
            </h1>
            
            <p className="mt-6 text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
              Quiet Control gives you a{" "}
              <span className="font-semibold text-foreground">minimum-effective routine</span>{" "}
              across body, food, home, appearance, finances, and career — and an intelligent agenda that fits your week. You validate; we propose.
            </p>

            {/* Waitlist Form */}
            <form id="waitlist" onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-end">
              <div className="flex-1 sm:max-w-sm">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm bg-background focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-smooth"
                />
              </div>
              
              <div className="sm:w-40">
                <label htmlFor="city" className="sr-only">City</label>
                <select
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-3 py-3 text-sm bg-background focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-smooth"
                >
                  <option value="">City</option>
                  <option>New York City</option>
                  <option>Boston</option>
                  <option>Washington, D.C.</option>
                  <option>New Jersey Area</option>
                  <option>Other</option>
                </select>
              </div>
              
              <Button type="submit" variant="hero" size="lg">
                Join the waitlist
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Button>
            </form>

            {/* Trust indicators */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-primary" />
                Founding 500 price lock
              </span>
              <span className="inline-flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-primary" />
                New cohorts every Monday
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldIcon className="w-4 h-4 text-primary" />
                No spam
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:pl-8 animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroImage}
                alt="Elegant workspace representing quiet control and organization"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full shadow-glow animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary-glow rounded-full shadow-soft animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;