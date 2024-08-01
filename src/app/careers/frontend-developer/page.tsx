import Layouts from "@/layouts"
import CommanSection from "@/components/Career_InnerPage/SalceCommanSection"
import JobDeclaration from "@/components/Career_InnerPage/Declaration"

const Developer = () => {
    return (
        <Layouts>
            <div>
                <CommanSection title="Frontend Developer" city="Gurugram" experience="2-3 Years experience" space="2 Position" button="Tech" />
                <JobDeclaration />
            </div>
        </Layouts>
    )
}
export default Developer