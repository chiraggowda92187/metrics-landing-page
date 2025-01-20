import Break from "./components/Break/Break";
import CallToAction from "./components/CTA/CallToAction";
import CallToActionTwo from "./components/CTA2/CallToAction";
import CallToActionExtended from "./components/CTAExtended/CTAExtended";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection"
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonial/Testimonial";
import TrustedCompanies from "./components/trustedcompanies/TrustedCompanies";


function App() {


  return (
    <>
      <div>
        <HeroSection />
        <TrustedCompanies />
        <CallToAction />
        <CallToActionExtended />
        <Break variant={'variant1'} />
        <Pricing />
        <Break variant={'variant2'} />
        <Testimonials />
        <Break variant={'variant1'} />
        <Faq />
        <CallToActionTwo />
        <Features />
        <Footer/>
      </div>
    </>
  );
}

export default App
