'use client';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import AboutUsSection from "@/components/sections/About";
import CTABanner from "@/components/sections/CTA";
import ContactSection from "@/components/sections/Contact";
import HowItWorksSection from "@/components/sections/HTW";
import HeroSection from "@/components/sections/Hero";
import PortfolioPage from "@/components/sections/Portfolio";
import ServicesSection from "@/components/sections/Services";
import StatisticsBanner from "@/components/sections/Statistics";
import TestimonialsSection from "@/components/sections/Testimonials";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
     <Header/>
    <HeroSection/>
      <AboutUsSection/>
      <ServicesSection id="services"/>
      <CTABanner/>
     <PortfolioPage/> 
     <StatisticsBanner/>
      <TestimonialsSection/> 
     <HowItWorksSection/> 
     <ContactSection /> 
     <Footer/> 
   
    </main>
  );
}