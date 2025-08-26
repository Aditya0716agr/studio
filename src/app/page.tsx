import { personalizeSiteContent } from '@/ai/flows/personalize-site-content';

import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import BenefitsSection from '@/components/sections/benefits';
import ScienceSection from '@/components/sections/science';
import TestimonialsSection from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import FloatingCTA from '@/components/floating-cta';
import { PersonalizationForm } from '@/components/personalization-form';

export default async function Home({ searchParams }: { searchParams: { interests?: string; campus?: string } }) {
  let personalizedContent = null;
  const interests = searchParams.interests;
  const campus = searchParams.campus;

  if (interests && campus) {
    try {
      personalizedContent = await personalizeSiteContent({
        userInterests: interests,
        campusLocation: campus,
      });
    } catch (error) {
      console.error("Failed to fetch personalized content:", error);
      // Fallback to default content if AI call fails
      personalizedContent = null;
    }
  }

  const defaultContent = {
    headline: "Energize Your Day, Instantly.",
    benefits: JSON.stringify([
      {
        title: "Fast-Acting",
        description: "Feel the kick in minutes, not hours. Perfect for a pre-lecture boost or a mid-day slump.",
        icon: "Zap",
      },
      {
        title: "Sugar-Free",
        description: "All the energy, none of the crash. Our gum is sweetened with natural, tooth-friendly xylitol.",
        icon: "Leaf",
      },
      {
        title: "Pocket-Ready",
        description: "Your secret weapon for focus and energy, ready whenever you are. Fits perfectly in your pocket or bag.",
        icon: "Pocket",
      },
      {
        title: "Unique Flavors",
        description: "Crafted with refreshing mint and fruit notes, designed for the modern Indian palate.",
        icon: "Sparkles",
      },
    ]),
    testimonials: JSON.stringify([
      {
        name: "Rohan S.",
        role: "Student, IIT Delhi",
        text: "Rise Gum is a lifesaver during late-night study sessions. It keeps me sharp and focused without the jitters of coffee.",
        avatar: "https://picsum.photos/100/100?random=1",
      },
      {
        name: "@GameProAnkit",
        role: "Gaming Influencer",
        text: "The focus it gives me is unreal. Perfect for intense gaming sessions when every millisecond counts. A must-have for any serious gamer.",
        avatar: "https://picsum.photos/100/100?random=2",
      },
      {
        name: "Priya M.",
        role: "Fitness Enthusiast",
        text: "Finally, a healthy energy boost that fits my active lifestyle. I pop a piece before my workout for that extra edge.",
        avatar: "https://picsum.photos/100/100?random=3",
      },
    ]),
  };

  // The AI output for benefits and testimonials is a single string.
  // We can't reliably parse it into a structured format.
  // For this reason, we will only use the personalized headline and pass the default structured data for other sections.
  const headline = personalizedContent?.personalizedHeadline || defaultContent.headline;
  const benefits = defaultContent.benefits;
  const testimonials = defaultContent.testimonials;

  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        <PersonalizationForm currentInterests={interests} currentCampus={campus} />
        <HeroSection headline={headline} />
        <BenefitsSection benefits={benefits} />
        <ScienceSection />
        <TestimonialsSection testimonials={testimonials} />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
