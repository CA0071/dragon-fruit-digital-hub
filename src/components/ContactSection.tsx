import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Limpopo Province", "Polokwane, South Africa"],
      link: null,
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      details: ["+27 82 856 9925"],
      link: "tel:+27828569925",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["admin@proagrisa.com.za", "OrganicDFSA@gmail.com"],
      link: "mailto:admin@proagrisa.com.za",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8am - 5pm", "Sat: 9am - 1pm"],
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50" aria-labelledby="contact-heading" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Dragon Fruit South Africa - Healthy Fields" />
      <meta itemProp="telephone" content="+27828569925" />
      <meta itemProp="email" content="admin@proagrisa.com.za" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="addressLocality" content="Polokwane" />
        <meta itemProp="addressRegion" content="Limpopo" />
        <meta itemProp="addressCountry" content="South Africa" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Interested in starting your dragon fruit farm or need quality plant material? 
            Contact Max van Heerden, South Africa's first dragon fruit importer since 2008.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    info.link ? (
                      <a key={i} href={info.link} className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground font-body text-sm">
                        {detail}
                      </p>
                    )
                  ))}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/27828569925?text=Hi%2C%20I'm%20interested%20in%20Dragon%20Fruit%20plants"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-300"
            >
              <MessageCircle className="w-8 h-8" />
              <div>
                <h3 className="font-display font-semibold text-lg">WhatsApp Us Directly</h3>
                <p className="text-secondary-foreground/80 font-body text-sm">Quick response guaranteed</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="aspect-video rounded-xl bg-secondary/10 flex items-center justify-center border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0!2d29.4585!3d-23.9045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d7c0a0a0a0a0%3A0x0!2sPolokwane%2C%20Limpopo!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dragon Fruit South Africa Location - Limpopo"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-body font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-body font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+27 XX XXX XXXX"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  required
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
