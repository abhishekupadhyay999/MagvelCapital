import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Sevices"
import WhyChooseUs from "../components/WhychooseUs";
import Process from "../components/Process";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonals";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import EMICalculator from "../components/EMIcalculator";
import FAQ from "@/components/FAQ";
import EligibilityChecker from "@/components/EligibilityChecker";
import TrustStrip from "@/components/TrustStrip";
import Leadership from "@/components/Leadership";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip/>
      <About />
      <Leadership/>
      <Services />
      <EMICalculator/>
      <EligibilityChecker/>
      <WhyChooseUs />
      <Process />
      <Partners />
      <Testimonials />
      <FAQ/>
      <Contact />
      <Footer />
      <WhatsappButton/>
      
    </>
  );
}