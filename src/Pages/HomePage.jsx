import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Hero from "../Components/Hero";
import ContactForm from "../Components/ContactForm";
import ResumeSection from "../Components/ResumeSection";
import Footer from "../Components/Footer";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import MyWork from "../Components/MyWork";

const HomePage = () => {
  return (
    <div className="">
      <div className="bg-slate-900 h-20 p-2 sticky top-0 z-50">
        <div className="lg:w-[80%] mx-auto ">
          <Header />
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="lg:w-[80%] mx-auto">
          <Hero />
        </div>
        <section className="lg:w-[80%] mx-auto">
          <AboutMe></AboutMe>
        </section>
        <section className="lg:w-[80%] mx-auto">
          <ResumeSection></ResumeSection>
        </section>
        <section className="lg:w-[80%] mx-auto">
          <Skills />
        </section>
        <section className="lg:w-[80%] mx-auto">
          <MyWork />
        </section>
        <section className="lg:w-[80%] mx-auto">
          <ContactForm></ContactForm>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
