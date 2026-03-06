import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shop", path: "/shop" },
  { label: "Fitment Guide", path: "/fitment-guide" },
  { label: "Engineering", path: "/engineering" },
  { label: "About", path: "/about" },
  {
    label: "Support",
    dropdown: [
      { label: "Installation Guide", path: "/installation-guide" },
      { label: "AI Installation Assistant", path: "/support/ai-installation-assistant" },
      { label: "FAQ", path: "/faq" },
      { label: "Warranty", path: "/warranty" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSupportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold tracking-wider text-foreground">
            MAX<span className="text-primary">RACING</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            if ("external" in link && link.external) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-sm tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              );
            }
            if (link.dropdown) {
              const isActive = link.dropdown.some((d) => location.pathname === d.path);
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSupportOpen((o) => !o)}
                    className={`inline-flex items-center gap-1 font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${supportOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {supportOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-border/60 bg-background/95 py-1.5 shadow-xl backdrop-blur-xl"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setSupportOpen(false)}
                            className={`block px-4 py-2.5 font-heading text-xs tracking-widest uppercase transition-colors hover:bg-primary/10 hover:text-primary ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                              }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm" className="font-heading tracking-wider uppercase">
            <Link to="/become-a-dealer">Become a Dealer</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/50 bg-background md:hidden"
          >
            <nav className="container flex flex-col gap-4 py-6">
              {navLinks.map((link) => {
                if ("external" in link && link.external) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-lg tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  );
                }
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileSupportOpen((o) => !o)}
                        className="flex w-full items-center justify-between font-heading text-lg tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileSupportOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSupportOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 flex flex-col gap-2 pl-4"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => { setMobileOpen(false); setMobileSupportOpen(false); }}
                                className={`font-heading text-base tracking-widest uppercase transition-colors hover:text-primary ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                                  }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading text-lg tracking-widest uppercase transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-2 font-heading tracking-wider uppercase">
                <Link to="/become-a-dealer" onClick={() => setMobileOpen(false)}>
                  Become a Dealer
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
