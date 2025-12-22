import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Farms", href: "#about" },
      { name: "Sustainability", href: "#benefits" },
      { name: "Contact", href: "#contact" },
    ],
    products: [
      { name: "Sweet African White", href: "#products" },
      { name: "Ruby Red Purple", href: "#products" },
      { name: "Plant Cuttings", href: "#products" },
      { name: "Wholesale", href: "#contact" },
    ],
    resources: [
      { name: "Growing Guide", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Support", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/dragonfruitsa", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/dragonfruitsa", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background/80 py-16" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">DF</span>
              </div>
              <div>
                <p className="font-display font-semibold text-background text-lg">Dragon Fruit South Africa</p>
                <p className="text-sm text-background/60">Healthy Fields | ProAgriSA</p>
              </div>
            </div>
            <p className="text-background/70 font-body mb-6 max-w-sm">
              South Africa's first dragon fruit importer since 2008. Creating new agricultural 
              opportunities with premium plant material and expert support.
            </p>

            {/* Contact Info */}
            <address className="not-italic space-y-3 mb-6">
              <a href="tel:+27828569925" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">+27 82 856 9925</span>
              </a>
              <a href="mailto:admin@proagrisa.com.za" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">admin@proagrisa.com.za</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Limpopo Province, South Africa</span>
              </div>
            </address>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Company links">
            <h4 className="font-display font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-300 font-body text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Products links">
            <h4 className="font-display font-semibold text-background mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-300 font-body text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources links">
            <h4 className="font-display font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-300 font-body text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 font-body text-sm">
            © {currentYear} Dragon Fruit South Africa (DFSA) | Healthy Fields | ProAgriSA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300 font-body text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300 font-body text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
