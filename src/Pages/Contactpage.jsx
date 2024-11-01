import React from "react";
import Header from "../Components/Header";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

const Contactpage = () => {
  return (
    <div className="">
      <div className="bg-slate-900 h-20 p-2 sticky top-0 z-50">
        <div className="lg:w-[80%] mx-auto ">
          <Header />
        </div>
      </div>
      <div className="bg-slate-800">
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

export default Contactpage;
