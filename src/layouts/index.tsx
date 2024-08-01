import Header from "./Header"
import Footer from "./Footer"

type LayoutProps ={
    children: React.ReactElement;
};

const Layouts = ({children}:LayoutProps) => {
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layouts