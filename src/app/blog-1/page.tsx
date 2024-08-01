import Layouts from "@/layouts"
import CardSection from "@/components/Blog_1/BlogCards"
import BlogInfo from "@/components/Blog_1/BlogInformation"

const Blog = () => {
    return (
        <Layouts>
            <div>
               <BlogInfo/> 
               <CardSection/>
            </div>
        </Layouts>
    )
}
export default Blog