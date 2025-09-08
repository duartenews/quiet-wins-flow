import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/quietplanner-b.svg"; // logo completo

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container-tight flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group transition-smooth" aria-label="Quiet Control - Home">
          <img
            src={logo}
            alt="Quiet Planner logo"
            className="h-6 w-auto group-hover:opacity-90 transition-smooth" // <-- aumentei aqui
            draggable={false}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <button
            onClick={() => scrollToSection("how")}
            className="hover:text-foreground transition-smooth"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection("what")}
            className="hover:text-foreground transition-smooth"
          >
            What you get
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-foreground transition-smooth"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop CTA */}
        <Button
          onClick={() => scrollToSection("waitlist")}
          variant="hero"
          className="hidden md:inline-flex"
        >
          Join waitlist
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-background">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("how")}
              className="block w-full text-left py-2 text-neutral-600 hover:text-foreground transition-smooth"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("what")}
              className="block w-full text-left py-2 text-neutral-600 hover:text-foreground transition-smooth"
            >
              What you get
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left py-2 text-neutral-600 hover:text-foreground transition-smooth"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              variant="hero"
              className="w-full mt-4"
            >
              Join waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
