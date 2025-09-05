const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto px-4 sm:px-6 lg:px-8 container-tight py-12 border-t border-neutral-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {currentYear} Quiet Control. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="hover:text-foreground transition-smooth focus:outline-none focus:text-foreground"
          >
            Privacy
          </a>
          <a 
            href="#" 
            className="hover:text-foreground transition-smooth focus:outline-none focus:text-foreground"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;