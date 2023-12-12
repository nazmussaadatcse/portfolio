import useSkills from "../../hooks/useSkills";
import animation from '../../assets/animation.json'
import Lottie from "lottie-react";
const Skills = () => {
    const [skills] = useSkills();

    return (
        <div className="my-16 bg-slate-100">
            <h2 className="text-center text-3xl underline decoration-double">Skills</h2>
            <div className="container flex-row lg:flex items-center mx-auto gap-16">
                <div className="w-full lg:w-1/2 mx-auto">

                    <Lottie className="h-[400px] md:h-[600px]" animationData={animation} />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-6">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex h-12 bg-white   items-center justify-between border-x-2 m-4 border-gray-300 rounded-lg overflow-hidden">
                            <div className="w-32 flex-shrink-0">
                                <img className="w-full h-12 object-contain" src={skill.image} alt={skill.name} />
                            </div>
                            <div className=" p-2 text-center items-center">
                                <h3 className="text-gray-900 font-semibold text-lg">{skill.name}</h3>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default Skills;
