import animation from '../../assets/animation.json'
import Lottie from "lottie-react";
const Skills = () => {
    const skills = [
        {
          "id": 1,
          "name": "React",
          "image": "https://i.ibb.co/rkSv0sL/react.png"
        },
        {
          "id": 2,
          "name": "Tailwind",
          "image": "https://i.ibb.co/kcsb21L/tailwind-removebg-preview.png"
        },
        {
          "id": 3,
          "name": "Next.js",
          "image": "https://i.ibb.co/0DfQpcr/next-removebg-preview.png"
        },
        {
          "id": 4,
          "name": "React Query",
          "image": "https://i.ibb.co/71KCBkB/react-query.png"
        },
        {
          "id": 5,
          "name": "JavaScript",
          "image": "https://i.ibb.co/fCx7TWT/js.png"
        },
        {
          "id": 6,
          "name": "MongoDB",
          "image": "https://i.ibb.co/g37NLsd/mongodb.png"
        },
        {
          "id": 7,
          "name": "Node.js",
          "image": "https://i.ibb.co/MCzpbhY/node.png"
        },
        {
          "id": 8,
          "name": "Express",
          "image": "https://i.ibb.co/jhn0hdV/express-js.png"
        }
      ]

    return (
        <div className=" bg-slate-100">
            <h2 className="text-center text-3xl underline decoration-double p-4">Skills</h2>
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
            <div className="pl-4 py-4 md:pl-12">
                <div className="">
                    <h3>Expertise</h3>
                    <ul>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">JavaScript</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">React</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">NodeJs</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">ExpressJs</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">MongoDB</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Firebase</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">React Query</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Rest API</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Tailwind</li>
                    </ul>
                </div>
                <div className="">
                    <h3>Tools</h3>
                    <ul>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">VS Code</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Git</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Github</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Netlify</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Vercel</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Canva</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Figma</li>
                    </ul>
                </div>
                <div className="">
                    <h3>Comfortable</h3>
                    <ul>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">NextJs</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">TypeScript</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Mongoose</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">JWT</li>
                    </ul>
                </div>
                <div className="">
                    <h3>Familiar</h3>
                    <ul>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">C</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Python</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Redux</li>
                        <li className="btn btn-xs m-1 bg-white hover:bg-white">Socket.io</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;
