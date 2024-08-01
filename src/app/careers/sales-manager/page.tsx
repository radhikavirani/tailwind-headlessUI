import Layouts from "@/layouts"
import CommanSection from "@/components/Career_InnerPage/SalceCommanSection"
import JobDeclaration from "@/components/Career_InnerPage/Declaration"

const SalesManager = () => {
    return (
        <Layouts>
            <div>
                <CommanSection title="Sales Manager" city="New Delhi" experience="4-5 Years experience" space="1 Position" button="Sales" />
                <JobDeclaration />
            </div>
        </Layouts>
    )
}
export default SalesManager