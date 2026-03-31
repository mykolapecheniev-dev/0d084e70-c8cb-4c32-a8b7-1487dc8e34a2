"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Calendar, Mail, Music, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Events",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="BEst"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Feel the Rhythm at BEst"
      description="Experience the ultimate dance destination. Immerse yourself in world-class beats, vibrant lights, and an unforgettable nightlife experience."
      tag="Your Night Starts Here"
      mediaItems={[
        {
          imageSrc: "https://pixabay.com/get/g4d91b7e00e6d4c3cdd43fea220788e8b34d607256bc1ca4469bc2995342cf2c4297de7a997537283ec2fc03c4d040de4_1280.jpg?_wi=1",
          imageAlt: "Club Atmosphere",
        },
        {
          imageSrc: "https://pixabay.com/get/g89d6736e62409655503edc9cc652c87c3f6e5cbc16e44cbf5626f110790a39f789744bfdd6bbc3961e1437b7002c7fed1a40f9744c8790f5c1a591ec961c170c_1280.jpg?_wi=1",
          imageAlt: "Nightclub Energy",
        },
        {
          imageSrc: "https://pixabay.com/get/g4d91b7e00e6d4c3cdd43fea220788e8b34d607256bc1ca4469bc2995342cf2c4297de7a997537283ec2fc03c4d040de4_1280.jpg?_wi=2",
          imageAlt: "Dance Floor View",
        },
        {
          imageSrc: "https://pixabay.com/get/g89d6736e62409655503edc9cc652c87c3f6e5cbc16e44cbf5626f110790a39f789744bfdd6bbc3961e1437b7002c7fed1a40f9744c8790f5c1a591ec961c170c_1280.jpg?_wi=2",
          imageAlt: "DJ Performance",
        },
        {
          imageSrc: "https://pixabay.com/get/g4d91b7e00e6d4c3cdd43fea220788e8b34d607256bc1ca4469bc2995342cf2c4297de7a997537283ec2fc03c4d040de4_1280.jpg?_wi=3",
          imageAlt: "Party Crowd",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Join our community of 50k+ dancers"
      tagIcon={Sparkles}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Why BEst is Different"
      metrics={[
        {
          icon: Music,
          label: "Top DJs",
          value: "50+",
        },
        {
          icon: Users,
          label: "Happy Dancers",
          value: "10k+",
        },
        {
          icon: Calendar,
          label: "Events Weekly",
          value: "7",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "World-Class Sound",
          description: "Cutting-edge audio systems delivering crystal-clear bass and high-energy sound.",
          imageSrc: "https://pixabay.com/get/g62b7a463b907d00298cadc318c6d3690ef7c89f7c3ddcb958f14f53c6efabb71f42dace2bb81890763813154775cec52859db8312997d0f521b927e5ebf35acb_1280.jpg",
          imageAlt: "Sound",
        },
        {
          id: 2,
          title: "Signature Cocktails",
          description: "Expertly crafted drinks that fuel your dance moves all night long.",
          imageSrc: "https://pixabay.com/get/gac22679242757333affcf7673e314d8b20a456e3a4d25a878065b147eabb5dd37d3b18635200c0d40d2566b0910a11af47d897ac2bec76be7569f45dc9ca25b0_1280.png",
          imageAlt: "Cocktails",
        },
        {
          id: 3,
          title: "VIP Exclusive Areas",
          description: "Experience luxury with private booths and premium service.",
          imageSrc: "https://pixabay.com/get/g1976ee74c06198e0e9e6bad2708a2fc7f9a248ac688e617c5426a91041cf662144196e388df31ae9ec92984af7185513dbf1cd8f0ccaca514cf96d5edf0770d1_1280.jpg",
          imageAlt: "VIP",
        },
      ]}
      title="Club Experiences"
      description="Discover what makes our dance club the go-to spot in the city."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Best Club Ever!",
          quote: "The energy here is unmatched. I love the music selection every weekend.",
          name: "Alex R.",
          role: "Regular Dancer",
          imageSrc: "https://pixabay.com/get/g7036595570d52bf0d9ed1de7c98ed3f40e91b412dbae981057485873b9ed329c67bb3b9e1083f7990c0c25ec083621d68f7b364d3cf8ea3a6fea379422d93212_1280.jpg?_wi=1",
        },
        {
          id: "2",
          title: "Amazing Sound!",
          quote: "Absolutely top-tier sound system. You can feel the beat in your soul.",
          name: "Sarah L.",
          role: "Party Guest",
          imageSrc: "https://pixabay.com/get/g6a4e99c5b899e1aaf97cb414686f27c3a73554d59c2c89cdf14f35c5af29237518803c73d511214b9122355764f8ec145afa178747adf11052eb5dae1f326105_1280.jpg",
        },
        {
          id: "3",
          title: "VIP Service!",
          quote: "The VIP experience was flawless. Highly recommend booking a booth.",
          name: "Mike B.",
          role: "Socialite",
          imageSrc: "https://pixabay.com/get/g9a999fc193269a9b1100909cef6de7a9591fe0da7caa148f4a786eb10fb79f31e1d42c756a46654546925b10e5b61ff8b870fd8102ed42dd38312e9e55f4f2b6_1280.jpg",
        },
        {
          id: "4",
          title: "Unforgettable Nights",
          quote: "BEst provides the best nightlife vibes in town. I never miss a Friday.",
          name: "Jessica W.",
          role: "Dance Fan",
          imageSrc: "https://pixabay.com/get/g65ac1736098824df4890e6cc686a2ace151454abd50e6f8bac1b7bd70db570ac5f2cd51e34a1f793c43d767de92b06af754527fc62d5dd6c0a85da1d196bd762_1280.jpg",
        },
        {
          id: "5",
          title: "Top Tier Vibes",
          quote: "Every visit feels like a new adventure. The staff is incredible.",
          name: "Tom K.",
          role: "Regular",
          imageSrc: "https://pixabay.com/get/g7036595570d52bf0d9ed1de7c98ed3f40e91b412dbae981057485873b9ed329c67bb3b9e1083f7990c0c25ec083621d68f7b364d3cf8ea3a6fea379422d93212_1280.jpg?_wi=2",
        },
      ]}
      title="Voices of the Club"
      description="Hear what our dancers are saying about BEst."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What is the dress code?",
          content: "We recommend smart-casual attire. Avoid flip-flops and athletic wear.",
        },
        {
          id: "2",
          title: "Are there age restrictions?",
          content: "Yes, all guests must be 21+ with a valid government-issued ID.",
        },
        {
          id: "3",
          title: "Can I reserve a table?",
          content: "Yes, visit our VIP section or contact us via our website to secure your spot.",
        },
      ]}
      title="Need Information?"
      description="Find answers to the most common questions about our club policies and events."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Lost and Found",
          content: "Contact us at info@bestclub.com for lost items.",
        },
        {
          id: "q2",
          title: "Party Bookings",
          content: "Email events@bestclub.com to book your party or corporate event.",
        },
      ]}
      ctaTitle="Stay Connected"
      ctaDescription="Join our mailing list to receive event updates, special guest alerts, and exclusive invitations."
      ctaButton={{
        text: "Join Newsletter",
      }}
      ctaIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="BEst"
      columns={[
        {
          title: "Club",
          items: [
            {
              label: "Events",
              href: "#features",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | BEst Dance Club"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
