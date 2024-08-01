import Layouts from "@/layouts"
import HeroSection from "@/components/Data Analytics/DataAnalyticsHeroSection"
import NextSection from "@/components/Data Analytics/NextSection"
import Segmentation from "@/components/Data Analytics/Segmentation"

const DataAnalytics = () => {
    return (
        <Layouts>
            <div>
                <HeroSection/>
                <NextSection/>
                <Segmentation/>
            </div>
        </Layouts>
    )
}
export default DataAnalytics