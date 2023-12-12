import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Self Employed',
      position: 'Front End Engineer',
      duration: 'January 2021 - Present',
      description: 'Responsible for developing scalable web applications and implementing new features using MERN Stack.',
    },
    {
      company: 'Self Employed',
      position: 'MERN Stack Developer',
      duration: 'June 2022 - Present',
      description: 'Worked on building user interfaces and full stack projects.',
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-center text-3xl underline decoration-double p-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6  p-4 m-4 lg:mx-2 lg:px-2">
          <h3 className="text-lg font-semibold">{exp.position}</h3>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-sm text-gray-500">{exp.duration}</p>
          <p className="mt-2">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
