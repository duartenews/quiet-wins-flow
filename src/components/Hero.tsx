import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import busyWoman from "@/assets/busywoman.jpg";
import { CheckIcon, ClockIcon, ShieldIcon } from "lucide-react";

/** Mini base local de cidades */
type CityPoint = { name: string; lat: number; lon: number };
const CITY_DB: CityPoint[] = [
  { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { name: "Campinas", lat: -22.9056, lon: -47.0608 },
  { name: "Santos", lat: -23.9608, lon: -46.3336 },
  { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
  { name: "Belo Horizonte", lat: -19.9167, lon: -43.9345 },
  { name: "Curitiba", lat: -25.4284, lon: -49.2733 },
  { name: "Porto Alegre", lat: -30.0346, lon: -51.2177 },
  { name: "Florianópolis", lat: -27.5949, lon: -48.5482 },
  { name: "Brasília", lat: -15.7939, lon: -47.8828 },
  { name: "Salvador", lat: -12.9777, lon: -38.5016 },
  { name: "Recife", lat: -8.0476, lon: -34.8770 },
  { name: "Fortaleza", lat: -3.7319, lon: -38.5267 },
  { name: "New York City", lat: 40.7128, lon: -74.0060 },
  { name: "Boston", lat: 42.3601, lon: -71.0589 },
  { name: "Washington, D.C.", lat: 38.9072, lon: -77.0369 },
  { name: "Newark (NJ)", lat: 40.7357, lon: -74.1724 },
  { name: "Philadelphia", lat: 39.9526, lon: -75.1652 },
];

/** Distância Haversine */
function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const sinDLat = Math.sin(dLat / 2);
  const sinDLon = Math.sin(dLon / 2);
  const h = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

function nearestCities(lat: number, lon: number, limit = 3, exclude: string[] = []) {
  return CITY_DB
    .filter(c => !exclude.includes(c.name))
    .map(c => ({ ...c, dist: haversineKm({ lat, lon }, c) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map(c => c.name);
}

const Hero = () => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [cityOptions, setCityOptions] = useState<string[]>([
    "New York City",
    "Boston",
    "Washington, D.C.",
    "Other",
  ]);
  const [autoCity, setAutoCity] = useState<string | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("geo-ip request failed");
        const data = await res.json();
        const detectedCity: string = data?.city || "Your city";
        const lat: number = data?.latitude;
        const lon: number = data?.longitude;

        if (isMounted && lat && lon) {
          const nearest = nearestCities(lat, lon, 3, [detectedCity]);
          const opts = [detectedCity, ...nearest, "Other"];
          setCityOptions(opts);
          setAutoCity(detectedCity);
          setCity(detectedCity);
        }
      } catch {
        // fallback silencioso
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    toast({ title: "You're on the waitlist! 🎉", description: "We'll email your cohort date soon." });
    setEmail("");
    setCity("");
  };

  const selectPlaceholder = useMemo(() => (autoCity ? "Choose your area" : "City"), [autoCity]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle"></div>
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 container-tight py-20 sm:py-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Calm over chaos in{" "}
              <span className="relative">
                <span className="underline decoration-primary/60 underline-offset-4">21 days</span>
              </span>{" "}
              — built for{" "}
              <span className="font-script text-black font-normal text-[5.3rem]">
                ambitious women.
              </span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
              Quiet Control builds a{" "}
              <span className="font-semibold text-foreground">minimum-effective routine</span>{" "}
              across life’s essentials — with an agenda that adapts to your week.
            </p>

            {/* Formulário */}
            <form
              id="waitlist"
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-end"
            >
              <div className="flex-[2]">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-base bg-background focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-smooth"
                />
              </div>

              <div className="flex-[1] min-w-[120px] max-w-[160px]">
                <label htmlFor="city" className="sr-only">City</label>
                <select
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-3 py-3 text-sm bg-background focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-smooth"
                >
                  <option value="">{selectPlaceholder}</option>
                  {cityOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
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
                Founding 500 — save big now, keep the same price forever
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

          {/* Coluna direita (imagem sem bolinhas) */}
          <div className="relative lg:pl-8 animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={busyWoman}
                alt="Elegant workspace representing quiet control and organization"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
