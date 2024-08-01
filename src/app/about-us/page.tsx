import Layouts from "@/layouts"
import MainSection from "@/components/About Us/MainSection"
import OurStory from "@/components/About Us/OurStory"
import CardSection from "@/components/About Us/Vision&Goal"
import MeetTeam from "@/components/About Us/MeetOurTeam"
import OurInvestors from "@/components/About Us/OurInvestors"
import JoinTeam from "@/components/About Us/JoinOurTeam"

const AboutUs = () => {
    return (
        <Layouts>
            <div>
                <MainSection />
                <OurStory />
                <CardSection/>
                <MeetTeam/>
                <OurInvestors/>
                <JoinTeam/>
            </div>
        </Layouts>
    )
}
export default AboutUs