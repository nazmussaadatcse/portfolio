import Lottie from "lottie-react";
import contact from '../../assets/contact.json'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="bg-slate-100 py-8">
            <h2 className="text-center text-3xl underline decoration-double">Contact</h2>
            <div className="container mx-auto py-2">
                <div className="flex flex-col md:flex-row items-center justify-center  mb-8 mx-2">
                    <div className="w-4/5 lg:w-1/2 p-4">


                        <Lottie className="w-full lg:w-1/2 p-4" animationData={contact} />

                    </div>
                    <div className="lg:w-1/2 p-4 border-l-4 border-gray-500">
                        <h2 className="text-2xl font-semibold mb-2 mt-4">Contact Information</h2>
                        <div className="flex items-center gap-1">
                            <MdEmail></MdEmail>
                            <p>nazmus.bd97@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaPhone></FaPhone>
                            <p>+880 1303033418</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaLinkedin></FaLinkedin>
                            <p className="hover:text-blue-700 text-blue-900"><a href="https://www.linkedin.com/in/saadatcse/"> LinkedIn</a></p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaGithubSquare></FaGithubSquare>
                            <p className="hover:text-blue-700 text-blue-900"><a href="https://github.com/nazmussaadatcse"> GitHub</a></p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaMapLocation></FaMapLocation>
                            <p>Address: Dhaka, Bangladesh</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;
