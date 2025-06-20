import CertificateSection from "./component/certificate";
import Project from "./component/project";
import ClientReviewsSection from "./component/review";
import MyServicesWithPricingSection from "./component/service";
import Skills from "./component/skills";
import TrustedBySection from "./component/trustbadges";
import About from "./component/about";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Footer from "./component/footer";
import Contact from "./component/contact";
import VideoSlider from "./component/slider";

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
