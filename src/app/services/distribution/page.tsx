import Layouts from "@/layouts"
import FirstSection from "@/components/Distribution/FirstSection"
import Fairdeal from "@/components/Distribution/Fairdeal"
import Brands from "@/components/Distribution/Brands"
import Retailers from "@/components/Distribution/Retailers"

const Distribution = () => {
    return (
        <Layouts>
            <div>
                <FirstSection/>
                <Fairdeal/>
                <Brands/>
                <Retailers/>
            </div>
        </Layouts>
    )
}
export default Distribution