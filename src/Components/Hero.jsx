import React from "react";
import { Link } from "react-router-dom";
import heroPic from "../assets/i.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="flex items-center bg-base-200 min-h-screen text-gray-50  py-12 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full ">
        <div className="text-center lg:text-left my-10 lg:my-0">
          <h3 className="text-orange-500 text-4xl my-5">Hello, I’m</h3>
          <h1 className=" text-5xl lg:text-8xl font-bold">
            Din Mohammad <br /> Al-Amin
          </h1>
          <p className="py-6">Front-End Developer</p>
          <Link>
            <button className=" bg-orange-500 text-gray-950 rounded-3xl  py-2 px-8">
              Hire Me
            </button>
          </Link>
        </div>

        <div className=" relative items-start  w-full lg:w-1/2">
          <div className="">
            <img src={heroPic} className="w-full object-cover object-center " />
          </div>
          <div className="w-[100%] h-[80px] bg-slate-700 absolute -bottom-10  rounded-full opacity-1 p-3 flex gap-5 items-center justify-center">
            <Link
              className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out"
              to="#"
            >
              <FaLinkedinIn className="text-2xl " />
            </Link>
            <Link
              className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out"
              to="#"
            >
              <GrFacebookOption className="text-2xl " />
            </Link>
            <Link
              className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out"
              to="#"
            >
              <FaTwitter className="text-2xl " />
            </Link>
            <Link
              className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out"
              to="#"
            >
              <VscGithubInverted className="text-2xl " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div>
      <div className="min-h-screen text-gray-50 bg-red-400">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="rounded-lg shadow-2xl" />

          <div>
            <h3 className="text-orange-500 text-4xl">Hello, I’m</h3>
            <h1 className="text-7xl font-bold">
              Din Mohammad <br /> Al-Amin
            </h1>
            <p className="py-6">Front-End Developer</p>
            <Link>
              <button className=" bg-orange-500 text-gray-950 rounded-3xl  py-2 px-8">Hire Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div> */
}
