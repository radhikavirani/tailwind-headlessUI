import Layouts from "@/layouts"
import JoinUs from "@/components/Careers/JoinUs"
import JobPosition from "@/components/Careers/JobPosition"
import SendYourCV from "@/components/Careers/SendYourCV"

const Careers = () => {
    return (
        <Layouts>
            <div>
                <JoinUs/>
                <JobPosition/>
                <SendYourCV/>
            </div>
        </Layouts>
    )
}
export default Careers