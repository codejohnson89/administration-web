import Footer from "../Footer";
import Header from "../Header";
import ContentContainer from "./ContentContainer";

/**
 * Layout is a function that returns a React fragment containing a header, main, and footer.
 * @param {any} props - any
 * @returns The return value is a React element.
 */
export default function Layout(props:any) {
    return (
        <>
            <Header/>
            <ContentContainer>
                {props.children}
            </ContentContainer>
            <Footer/>
        </>
    )
}