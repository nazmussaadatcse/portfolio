import me from '../../assets/me.png';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';


const Top = () => {

    const onButtonClick = () => {
        const pdfUrl = "/src/assets/MD_Nazmus_Saadat_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MD_Nazmus_Saadat_Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row justify-center md:justify-around items-center">
            <div className="order-2 md:order-1 flex flex-col md:w-1/2 md:ml-8">
                <h1 className="text-3xl md:text-5xl mb-1">Nazmus Saadat</h1>
                <p className=" text-xl md:text-2xl mb-4">MERN Stack Developer.</p>

                <p className=" max-w-md">
                    As a MERN stack developer I'm passionate about crafting top-notch web applications that simplify and enhance user experiences.
                </p>

                <p onClick={onButtonClick} className="btn btn-outline mt-2 w-48 rounded-lg">
                    Download Resume
                </p>





                <div className='flex gap-4 my-2 text-lg'>
                    <div className="flex items-center gap-1">
                        <FaLinkedin></FaLinkedin>
                        <p className="hover:text-blue-700 text-blue-900"><a href="https://www.linkedin.com/in/saadatcse/"> LinkedIn</a></p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaGithubSquare></FaGithubSquare>
                        <p className="hover:text-blue-700 text-blue-900"><a href="https://github.com/nazmussaadatcse"> GitHub</a></p>
                    </div>
                </div>
            </div>
            <img src={me} alt="Your Image" className="order-1 md:order-2 w-48 mb-4 md:mb-8 md:w-1/4 rounded-md mt-4 md:mt-0" />
        </div>
    );
};

export default Top;
