import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Top from "./sections/Top";


const Home = () => {
    return (
        <div className="bg-slate-100">
            <Nav></Nav>
            <Top></Top>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;