import { Link } from "react-router-dom";
import { Mail, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-carbon">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-heading text-2xl font-bold tracking-wider text-foreground">
              MAX<span className="text-primary">RACING</span>
            </span>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Race-grade hydraulic steering dampers. Precision-engineered for riders who demand control.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm tracking-widest text-metallic">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: "Fitment Guide", path: "/fitment-guide" },
                { label: "Engineering", path: "/engineering" },
                { label: "About", path: "/about" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-heading text-sm tracking-widest text-metallic">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/installation-guide"
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/support/ai-installation-assistant"
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  AI Installation Assistant
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/warranty"
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm tracking-widest text-metallic">Connect</h4>
            <div className="flex gap-4">
              <a href="mailto:info@maxracing.us" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/maxracing.us" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="tel:+17273779546" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
            <p className="mt-4 space-y-1 font-body text-sm text-muted-foreground">
              <span className="block">info@maxracing.us</span>
              <a href="tel:+17273779546" className="block hover:text-primary transition-colors">+1 727 377 9546</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border/30 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} MaxRacing. All rights reserved. Precision engineering, zero compromise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
