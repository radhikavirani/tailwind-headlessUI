import Layouts from "@/layouts"
import GetInTouch from "@/components/Contact Us/GetInTouch"
import Contact from "@/components/Contact Us/ContactUs"
import BuildGrow from "@/components/Contact Us/BuildGrow"

const ContactUs = () => {
    return(
        <Layouts>
            <div>
                <GetInTouch/>
                <Contact/>
                <BuildGrow/>
            </div>
        </Layouts>
    )
}
export default ContactUs