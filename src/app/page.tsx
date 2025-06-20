import { Contact } from "lucide-react";
import About from "../component/about";
import CertificateSection from "../component/certificate";
import Hero from "../component/hero";
import Navbar from "../component/navbar";
import Project from "../component/project";
import ClientReviewsSection from "../component/review";
import MyServicesWithPricingSection from "../component/service";
import Skills from "../component/skills";
import VideoSlider from "../component/slider";
import TrustedBySection from "../component/trustbadges";
import Footer from "../component/footer";


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
