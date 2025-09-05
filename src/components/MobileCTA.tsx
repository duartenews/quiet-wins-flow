import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 inset-x-4 md:hidden z-40">
      <Button 
        onClick={scrollToWaitlist}
        variant="hero" 
        className="w-full shadow-elegant"
        size="lg"
      >
        Join the waitlist
      </Button>
    </div>
  );
};

export default MobileCTA;