import Education from "./sections/Education";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Top from "./sections/Top";


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Top></Top>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default Home;