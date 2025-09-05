import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container-tight flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group transition-smooth">
          <svg 
            className="w-6 h-6 text-foreground group-hover:text-primary transition-smooth" 
            viewBox="0 0 24 24" 
            fill="none" 
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 9h10M7 12h6M7 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="font-semibold tracking-tight text-foreground">Quiet Control</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <button 
            onClick={() => scrollToSection('how')} 
            className="hover:text-foreground transition-smooth"
          >
            How it works
          </button>
          <button 
            onClick={() => scrollToSection('what')} 
            className="hover:text-foreground transition-smooth"
          >
            What you get
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-foreground transition-smooth"
          >
            FAQ
          </button>
        </nav>

        {/* Desktop CTA */}
        <Button 
          onClick={() => scrollToSection('waitlist')} 
          variant="hero" 
          className="hidden md:inline-flex"
        >
          Join waitlist
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-background">
          <nav className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('how')} 
              className="block w-full text-left py-2 text-neutral-600 hover:text-foreground transition-smooth"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('what')} 
              className="block w-full text-left py-2 text-neutral-600 hover:text-foreground transition-smooth"
            >
              What you get
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left py-2 text-neutral-600 hover:text-foreground transition-smooth"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('waitlist')} 
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