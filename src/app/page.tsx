import CertificateSection from "./certificate";
import Project from "./project";
import ClientReviewsSection from "./review";
import MyServicesWithPricingSection from "./service";
import Skills from "./skills";
import TrustedBySection from "./trustbadges";
import About from "./about";
import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import Contact from "./contact";
import VideoSlider from "./slider";

export default function HomePage() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
       <Project/>
    <Skills/>
    <MyServicesWithPricingSection/>
    <ClientReviewsSection/>
    <TrustedBySection/>
    <CertificateSection/>
   <Contact/>
   <VideoSlider/>
    <Footer/>
    </div>
  )
  
}
