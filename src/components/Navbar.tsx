import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    // For hash links on the home page
    if (href.startsWith("/#")) {
      const hash = href.substring(1); // e.g. #about
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container-wide px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Falcon Crest Global" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground font-medium hover:text-gold transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#contact"
              onClick={() => handleNavClick("/#contact")}
              className="bg-gold text-secondary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-gold-dark transition-colors"
            >
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block py-2 text-foreground hover:text-gold transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                onClick={() => handleNavClick("/#contact")}
                className="block bg-gold text-secondary-foreground px-5 py-2.5 rounded font-semibold text-sm text-center"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
