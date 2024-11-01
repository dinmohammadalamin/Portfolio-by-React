import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen  py-10 px-4 lg:p-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">ABOUT ME</h1>
        <div className="border-b-4 border-orange-600 w-24 mx-auto mt-2"></div>
      </div>
      <div className="flex items-center">
        <div className=" text-white rounded-lg overflow-hidden flex flex-col md:flex-row justify-between w-full">
          {/* Left Section with Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://scontent.fdac31-2.fna.fbcdn.net/v/t39.30808-6/422957551_3726709960986524_2413729148571415667_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Nkh6d_mr-Z0Q7kNvgGnGcsP&_nc_zt=23&_nc_ht=scontent.fdac31-2.fna&_nc_gid=A9emuy6Z7ESma2qwd1hY922&oh=00_AYB1_lzce5PMZUm5Bd10vRP76c7Xxhg5Rm9KAIbepHt8Jg&oe=672A378F" // Replace with actual image URL
              alt="Profile"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Right Section with Content */}
          <div className="md:w-1/2 w-full p-8">
            <h1 className="text-3xl font-semibold mb-4">Hi There! I'm Din Mohammad Al-Amin</h1>
            <h2 className="text-orange-600 text-lg font-medium mb-4">Visual Designer</h2>
            <p className="text-gray-300 mb-6">I am a Visual Designer with a strong focus on digital branding. Visual design seeks to attract, inspire, create desires, and motivate people to respond to messages, with a view to making a favorable impact.</p>

            {/* Information Section */}
            <div className="space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-400">Birthday:</span>
                <span>May 07, 1990</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Phone:</span>
                <span>+1 876-369-9009</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span>devis@example.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">From:</span>
                <span>2661 Hich meadow lane bear creek</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Language:</span>
                <span>English, Germanic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Freelance:</span>
                <span>Available</span>
              </div>
            </div>

            {/* Button */}
            <button className="bg-orange-600 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
