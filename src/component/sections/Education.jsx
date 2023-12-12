import Lottie from "lottie-react";
import education from '../../assets/education.json'

const Education = () => {
    return (
        <div className="bg-slate-100 py-8">
            <h2 className="text-center text-3xl underline decoration-double">Education</h2>
            <div className="container mx-auto py-2">
                <div className="flex flex-col md:flex-row items-center justify-center  mb-8 mx-2">
                    <div className="w-4/5 lg:w-1/2 p-4">


                        <Lottie className="w-4/5 lg:w-1/2 p-4" animationData={education} />
                    </div>
                    <div className="lg:w-1/2 p-4 border-l-4 border-purple-500">
                        <h2 className="text-2xl font-semibold mb-2">Daffodil International University </h2>
                        <p className="mb-2">Bachelor's in Computer Science</p>
                        <p className="mb-2">2017 - 2022</p>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;
