import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const ContactForm = () => {
  return (
    <section className=" text-white py-12 px-6 lg:p-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">CONTACT</h1>
        <div className="border-b-4 border-orange-600 w-24 mx-auto mt-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full  lg:space-x-12 ">
        {/* Left Section - Contact Form */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">Just say Hello</h2>
          <input type="text" placeholder="Your Name" className="w-full bg-[#161b22] border border-[#1f2937] p-4 rounded-md focus:outline-orange-600" />
          <input type="email" placeholder="Your Email" className="w-full bg-[#161b22] border border-[#1f2937] p-4 rounded-md focus:outline-orange-600" />
          <input type="text" placeholder="Your Subject" className="w-full bg-[#161b22] border border-[#1f2937]  p-4 rounded-md focus:outline-orange-600" />
          <textarea placeholder="Your Message" rows="4" className="w-full bg-[#161b22] border border-[#1f2937]  p-4 rounded-md focus:outline-orange-600"></textarea>
          <button className="bg-orange-600 text-[#0d1117] px-6 py-3 rounded-md hover:bg-orange-500 font-semibold">Send Message</button>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full lg:w-1/2 space-y-6 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold">Contact Info</h2>
          <p className="text-[#a8b3cf]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <p>Email</p>
                <p className="text-[#a8b3cf]">devis@example.com</p>
                <p className="text-[#a8b3cf]">info@support.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <p>Phone</p>
                <p className="text-[#a8b3cf]">+1 876-369-9009</p>
                <p className="text-[#a8b3cf]">+1 213-519-1786</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <p>Address</p>
                <p className="text-[#a8b3cf]">
                  2661 High Meadow Lane Bear Creek,
                  <br />
                  Olancha, KY 93544
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#a8b3cf] mt-4">Visit my social profile and get connected</p>
          <div className="flex space-x-4 text-xl text-[#a8b3cf]">
            <Link className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out" to="#">
              <FaLinkedinIn className="text-2xl " />
            </Link>
            <Link className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out" to="#">
              <GrFacebookOption className="text-2xl " />
            </Link>
            <Link className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out" to="#">
              <FaTwitter className="text-2xl " />
            </Link>
            <Link className=" bg-black p-3 rounded-full border hover:px-16 duration-700 ease-in-out" to="#">
              <VscGithubInverted className="text-2xl " />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
