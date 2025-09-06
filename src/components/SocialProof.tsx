import { useEffect, useState } from "react";

const SocialProof = () => {
  const [location, setLocation] = useState("your city");

  useEffect(() => {
    async function fetchLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data && data.city) {
          setLocation(data.city);
        } else if (data && data.region) {
          setLocation(data.region);
        }
      } catch (err) {
        console.error("Failed to fetch location", err);
      }
    }

    fetchLocation();
  }, []);

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 container-tight py-12">
      <div className="rounded-2xl border border-neutral-200 p-8 text-center bg-gradient-to-r from-neutral-50 to-background shadow-soft animate-fade-in">
        <p className="text-neutral-700 text-lg leading-relaxed">
          Designed for ambitious women in{" "}
          <span className="font-semibold text-foreground">
            {location}
          </span>{" "}
          who want clarity without the mental load.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
