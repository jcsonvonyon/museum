import SectionHero from "./SectionHero"
import SectionLetsConnect from "./SectionLetsConnect"
import SectionMyLatestProject from "./SectionMyLatestProject"
import SectionQuote from "./SectionQuote"
import { Navbar } from "./components"
import Footer from "./components/Footer"


const Landing = () => {
  return (
    <div className="safe-layout m-20">
      <Navbar/>
     <SectionHero/>
     <SectionMyLatestProject/>
     <SectionLetsConnect/>
     <SectionQuote/>
     <Footer/>
      </div>
  )
}

export default Landing