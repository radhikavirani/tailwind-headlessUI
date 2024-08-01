import Layouts from "@/layouts"
import CardSection from "@/components/Home/CardSection"
import FormSection from "@/components/Home/FormSection"
import HeroSection from "@/components/Home/HeroSection"
import LogoSection from "@/components/Home/LogoSection"
import MapSection from "@/components/Home/MapSection"
import WorkSection from "@/components/Home/WorkSection"

const Home = () => {
  return (
    <Layouts>
      <div>
        <HeroSection />
        <LogoSection />
        <CardSection/>
        <WorkSection/>
        <MapSection/>
        <FormSection/>
      </div>
    </Layouts>
  )
}
export default Home