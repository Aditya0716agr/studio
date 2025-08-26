import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedWrapper from "../animated-wrapper";

const faqs = [
  {
    question: "What is Rise Gum?",
    answer: "Rise Gum is India's first sugar-free caffeinated chewing gum. It's designed to provide a quick, convenient, and healthy energy boost without the sugar crash associated with traditional energy drinks.",
  },
  {
    question: "How much caffeine is in one piece of gum?",
    answer: "Each piece of Rise Gum contains approximately 50mg of caffeine, which is equivalent to about half a cup of coffee. This allows you to dose your energy intake precisely.",
  },
  {
    question: "Is it safe?",
    answer: "Yes, Rise Gum is made with high-quality, FSSAI-approved ingredients. It's sugar-free and uses xylitol as a sweetener, which is beneficial for dental health. As with any caffeinated product, it should be consumed in moderation.",
  },
  {
    question: "How quickly does it work?",
    answer: "The caffeine in Rise Gum is absorbed through the mucous membranes in your mouth, which is up to 5x faster than drinking coffee. Most users report feeling the effects within 5-10 minutes.",
  },
  {
    question: "Where can I buy Rise Gum?",
    answer: "Currently, Rise Gum is available for pre-order through our waitlist. We are also rolling out to select campus stores across major cities in India. Check our campus map for the latest availability.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Got questions? We’ve got answers. If you don’t find what you’re looking for, feel free to contact us.
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay="delay-200" className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-primary/10">
                <AccordionTrigger className="text-lg text-left hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
