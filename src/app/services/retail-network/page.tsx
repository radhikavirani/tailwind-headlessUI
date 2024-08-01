import Layouts from "@/layouts"
import HeroSection from "@/components/GTM/GTM_HeroSection"
import ScaleOmnichannel from "@/components/GTM/ScaleOmnichannel"
import Planing from "@/components/GTM/Planing"
import FormSection from "@/components/Home/FormSection"

const AiBasedGTM = () => {
    return (
        <Layouts>
            <div>
                <HeroSection/>
                <ScaleOmnichannel/>
                <Planing/>
                <FormSection/>
            </div>
        </Layouts>
    )
}
export default AiBasedGTM