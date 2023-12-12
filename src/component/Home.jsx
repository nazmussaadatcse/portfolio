import Footer from "./Footer/Footer";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Top from "./sections/Top";


const Home = () => {
    return (
        <div >
            <Nav></Nav>
            <Top></Top>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;