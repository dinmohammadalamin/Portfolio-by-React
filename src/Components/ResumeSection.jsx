import React from "react";

const ResumeSection = () => {
  return (
    <section className=" text-white py-12 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">RESUME</h1>
        <div className="border-b-4 border-orange-600 w-24 mx-auto mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between w-full">
        {/* Education Column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-[#1f2937]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-semibold text-orange-600">Master of Computer Science</h3>
              <span className="block text-sm text-[#a8b3cf]">2015 - 2016</span>
              <span className="block font-semibold">University of XYZ</span>
              <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
            </div>

            <div className="relative pl-6 border-l border-[#1f2937]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-semibold text-orange-600">Bachelor of Computer Science</h3>
              <span className="block text-sm text-[#a8b3cf]">2010 - 2014</span>
              <span className="block font-semibold">University of ABC</span>
              <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
            </div>

            <div className="relative pl-6 border-l border-[#1f2937]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-semibold text-orange-600">Diploma in Computer Science</h3>
              <span className="block text-sm text-[#a8b3cf]">2006 - 2010</span>
              <span className="block font-semibold">XYZ Institution</span>
              <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
            </div>
          </div>
        </div>

        {/* Divider for large screens */}
        <div className="hidden lg:block w-px bg-[#dcdee2] h-full mx-8"></div>

        {/* Experience Column */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-[#1f2937]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-semibold text-orange-600">Senior UX/UI Designer</h3>
              <span className="block text-sm text-[#a8b3cf]">Jan 2020 - Present</span>
              <span className="block font-semibold">Bergnaum, Hills and Howe</span>
              <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
            </div>

            <div className="relative pl-6 border-l border-[#1f2937]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-semibold text-orange-600">Product Designer</h3>
              <span className="block text-sm text-[#a8b3cf]">Jan 2016 - December 2019</span>
              <span className="block font-semibold">Langosh, Sipes and Raynor</span>
              <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
            </div>

            <div className="relative pl-6 border-l border-[#1f2937]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-orange-600"></div>
              <h3 className="text-xl font-semibold text-orange-600">UI/UX Designer</h3>
              <span className="block text-sm text-[#a8b3cf]">Jan 2014 - December 2015</span>
              <span className="block font-semibold">Strosin, Maggio and Homenick</span>
              <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
