import React from "react";

const Skills = () => {
  const skills = [
    { name: "Photoshop", level: "95%" },
    { name: "Motion Graphic", level: "75%" },
    { name: "Adobe XD", level: "90%" },
    { name: "UX Design", level: "85%" },
    { name: "HTML", level: "80%" },
    { name: "Digital Marketing", level: "90%" },
  ];
  return (
    <div className=" text-white py-12 px-6 lg:p-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">MY SKILLS</h1>
        <div className="border-b-4 border-orange-600 w-24 mx-auto mt-2"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section - Description */}
        <div className="lg:w-1/2">
          
          <h1 className="text-4xl font-semibold mb-4">All the skills that I have in that field of work are mentioned.</h1>
          <p className="text-gray-300 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
          <p className="text-gray-300">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt.</p>
        </div>

        {/* Right Section - Skills List */}
        <div className="lg:w-1/2 space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
