import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = isHomePage
    ? [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Gallery", href: "#gallery" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
      ]
    : [];

  const pageLinks = [
    { name: "Farm Directory", href: "/directory" },
    { name: "Growing Guide", href: "/growing-guide" },
    { name: "Cultivars", href: "/cultivars" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg md:text-xl">DF</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-foreground text-sm md:text-base">Dragon Fruit SA</p>
              <p className="text-xs text-muted-foreground">Healthy Fields</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium"
              >
                {link.name}
              </a>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Button variant="default" size="lg" asChild>
                <Link to="/dashboard">
                  <User size={18} className="mr-2" /> Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button variant="default" size="lg" asChild>
                  <Link to="/directory">Find Farms</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <Button variant="default" size="lg" className="mt-2" asChild>
                  <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <User size={18} className="mr-2" /> Dashboard
                  </Link>
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="lg" className="mt-2" asChild>
                    <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                  </Button>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/directory" onClick={() => setIsMenuOpen(false)}>Find Farms</Link>
                  </Button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
