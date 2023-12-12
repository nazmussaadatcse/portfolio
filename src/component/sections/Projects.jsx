const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Full Moon Matrimony",
            image: "https://i.ibb.co/6mD5kbq/full-moon-matrimony.png",
            type: "MERN Stack Matrimony Project",
            timePeriod: "10 days",
            features: "Advanced Search Implementation to find perfect partner.",
            features2: "Stripe Payment Integration for premium membership access",
            features3: "Highly Secured Web App using Firebase and JWT token",
            technology: "React, Node, Express, Tailwind, MongoDB, Firebase, React hook form, JWT Token, TanStack Query, React Stripe",
            liveSite: "https://amazing-cocada-b859c5.netlify.app/"
        },
        {
            id: 2,
            name: "Zero Dollar Bites",
            image: "https://i.ibb.co/jk2ST4N/zero-dollar-bites.png",
            type: "Full Stack Food Donation Project",
            timePeriod: "7 days",
            features: "Firebase Integration to add food to donate extra food.",
            features2: "Request, deliver food based on location and date",
            features3: "Advanced search operations by food name or expiry date",
            technology: "HTML, Tailwind CSS, JavaScript, React, Node, Express, MongoDB, Firebase, React hook form, JWT, React Query",
            liveSite: "https://silver-starship-696c68.netlify.app/"
        },
        {
            id: 3,
            name: "Automotive Car Shop",
            image: "https://i.ibb.co/mBWh40B/auto-motives-car.png",
            type: "Brand Based Car Shop Project",
            timePeriod: "7 days",
            features: "Search Cars by Brands and views details.",
            features2: "Add to cart your favorite car as a logged-In user",
            features3: "React router Implement with Firebase Authentication",
            technology: "JavaScript, React, Express, MongoDB, Firebase, React hook form, JWT, React Query",
            liveSite: "https://silver-starship-696c68.netlify.app/"
        }
        // Add more projects if needed
    ];


    return (
        <div className="bg-white">
            <h2 className="text-center p-8 text-3xl underline decoration-double">Projects</h2>
            <div className="container mx-auto py-8">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col md:flex-row items-center justify-center border  rounded-md mb-8 mx-2">
                        <div className="md:w-1/3 p-4">
                            <img src={project.image} alt={project.name} className="w-full h-auto" />
                        </div>
                        <div className="md:w-2/3 p-4">
                            <h2 className="text-2xl font-semibold mb-2">{project.name}
                                <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-8 text-lg">
                                   - [live]
                                </a>
                            </h2>
                            <p className="mb-4"><strong>Technologies:</strong> {project.technology}</p>
                            <p className="mb-4"><strong>Key Features:</strong></p>
                            <ul className="list-disc list-inside">
                                <li>{project.features}</li>
                                <li>{project.features2}</li>
                                <li>{project.features3}</li>
                            </ul>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
