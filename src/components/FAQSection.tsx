import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What climate is best for growing dragon fruit in South Africa?",
    answer: "Dragon fruit thrives in subtropical to tropical climates. In South Africa, Limpopo, Mpumalanga, KwaZulu-Natal, and the Eastern Cape coastal regions are ideal. They can tolerate temperatures from 0°C to 40°C but grow best between 20-30°C. Frost protection is needed in colder areas."
  },
  {
    question: "How long does it take for dragon fruit plants to bear fruit?",
    answer: "From our quality cuttings, you can expect your first harvest in 12-18 months. Full commercial production is typically reached by year 3-4. Our plants are selected from proven mother plants with high yields and excellent fruit quality."
  },
  {
    question: "What varieties do you offer and which is best for beginners?",
    answer: "We offer Sweet African White (Thompson) which is extremely sweet with white flesh, Ruby Red with purple flesh and high Brix 18-20, and Yellow Dragon Fruit. For beginners, we recommend the Sweet African White as it's hardy, highly productive, and well-adapted to South African conditions."
  },
  {
    question: "How much water do dragon fruit plants need?",
    answer: "Dragon fruit are drought-tolerant cacti but need regular watering for optimal production. During the growing season (spring-summer), water deeply once or twice weekly. Reduce watering in winter. Avoid waterlogging as this can cause root rot. Drip irrigation is ideal for commercial operations."
  },
  {
    question: "What support structure do dragon fruit plants need?",
    answer: "Dragon fruit are climbing cacti that need sturdy support. We recommend concrete or treated wooden posts (2-2.5m tall) with a circular or cross-shaped top frame. Each post can support 4 plants. Proper trellising is essential for good yields and easy harvesting."
  },
  {
    question: "Do you ship plants to other African countries?",
    answer: "Yes! We've successfully exported to Zambia, Malawi, Mozambique, and Morocco. International orders require phytosanitary certificates which we can arrange. Contact us for shipping quotes and requirements for your country."
  },
  {
    question: "What is your minimum order for commercial growers?",
    answer: "For commercial operations, we recommend a minimum of 100 cuttings to start. We offer volume discounts for larger orders. Each hectare typically requires 1,500-2,000 plants depending on your spacing. Contact us for a customized quote based on your farm size."
  },
  {
    question: "Do you provide ongoing support after purchase?",
    answer: "Absolutely! We provide comprehensive after-sales support including planting guides, fertilization schedules, pest management advice, and direct WhatsApp access to our team. We've helped establish successful dragon fruit farms across Southern Africa since 2008."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about growing dragon fruit in South Africa and ordering from DFSA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/27828569925"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
