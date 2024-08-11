import React from "react";
import meow from "./../assets/meow.gif";

const Hero = () => {
  return (
    <section className="w-full md:h-[75vh] h-[70vh] flex justify-center font-poppins mt-28 text-slate-300">
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="w-32  h-32  mx-auto bg-cover overflow-hidden">
          <img src={meow} alt="" className="w-full h-full" />
        </div>
        <p className=" text-center mt-6 font-light">Hi, I'm Akmal 👋</p>
        <h3 className="text-4xl md:text-5xl  mt-6 mb-14 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-neutral-800">
          Fullstack Developer
        </h3>
        <a
          id="detail"
          href="#skill-title"
          className="bounce px-12 md:px-16 py-3 mx-auto border border-neutral-600 bg-neutral-900 font-light hover:border-violet-700 hover:bg-violet-700 hover:text-white transition  text-sm text-neutral-400 uppercase tracking-[2px] hover:animate-none  "
        >
          Click Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
