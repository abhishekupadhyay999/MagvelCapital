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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <EMICalculator/>
      <WhyChooseUs />
      <Process />
      <Partners />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappButton/>
      
    </>
  );
}