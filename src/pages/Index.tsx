import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dragon Fruit South Africa",
    "alternateName": ["DFSA", "Healthy Fields", "ProAgriSA"],
    "url": "https://dragonfruitsouthafrica.co.za",
    "logo": "https://dragonfruitsouthafrica.co.za/logo.png",
    "description": "South Africa's first dragon fruit importer since 2008. Premium plant material and fresh dragon fruit from Healthy Fields.",
    "foundingDate": "2008",
    "founder": {
      "@type": "Person",
      "name": "Max van Heerden"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Polokwane",
      "addressRegion": "Limpopo",
      "addressCountry": "South Africa"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-82-856-9925",
      "contactType": "sales",
      "email": "admin@proagrisa.com.za",
      "availableLanguage": ["English", "Afrikaans"]
    },
    "sameAs": [
      "https://facebook.com/dragonfruitsa",
      "https://instagram.com/dragonfruitsa"
    ],
    "areaServed": ["South Africa", "Zambia", "Malawi", "Mozambique", "Morocco"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dragon Fruit Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sweet African White Dragon Fruit Plant",
            "description": "Thompson variety, extremely sweet with high productivity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Ruby Red Purple Flesh Dragon Fruit Plant",
            "description": "Best tasting purple flesh variety with high Brix 18-20"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Dragon Fruit South Africa | Premium Plants & Fresh Fruit | DFSA Healthy Fields</title>
        <meta name="description" content="Dragon Fruit South Africa (DFSA) - Premium dragon fruit plants and fresh fruit from Healthy Fields. South Africa's first importer since 2008. Commercial varieties, expert support. Contact +27 82 856 9925." />
        <meta name="keywords" content="dragon fruit South Africa, pitaya plants, DFSA, Healthy Fields, ProAgriSA, dragon fruit farming, commercial dragon fruit, organic fruit South Africa, Limpopo agriculture, Max van Heerden" />
        <meta name="author" content="Dragon Fruit South Africa" />
        <link rel="canonical" href="https://dragonfruitsouthafrica.co.za" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dragon Fruit South Africa | Premium Plants & Fresh Fruit" />
        <meta property="og:description" content="South Africa's first dragon fruit importer since 2008. Premium commercial plant material from Healthy Fields." />
        <meta property="og:url" content="https://dragonfruitsouthafrica.co.za" />
        <meta property="og:site_name" content="Dragon Fruit South Africa" />
        <meta property="og:locale" content="en_ZA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dragon Fruit South Africa | Premium Plants & Fresh Fruit" />
        <meta name="twitter:description" content="South Africa's first dragon fruit importer since 2008. Premium commercial plant material." />
        
        {/* Geo */}
        <meta name="geo.region" content="ZA-LP" />
        <meta name="geo.placename" content="Polokwane, Limpopo" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <GallerySection />
          <BenefitsSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
