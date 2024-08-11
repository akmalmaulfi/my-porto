import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const project = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <section className="font-poppins tracking-wide mt-20 md:py-10 px-8 ">
      <h3
        id="project-title"
        className="text-center text-4xl md:text-5xl uppercase font-extrabold text-neutral-300 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-neutral-800 mb-8"
      >
        Projects
      </h3>
      <OwlCarousel
        className="owl-theme "
        nav
        margin={20}
        responsive={{
          0: {
            items: 1, // Menampilkan 1 elemen di layar kecil (misalnya di ponsel)
          },
          600: {
            items: 2, // Menampilkan 2 elemen di layar menengah (misalnya tablet)
          },
          1000: {
            items: 3, // Menampilkan 3 elemen di layar besar (misalnya desktop)
          },
        }}
      >
        <div
          onClick={() => setShowModal(true)}
          className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-3 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"
        ></div>
        <div className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-1 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"></div>
        <div className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-1 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"></div>
        <div className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-1 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"></div>
        <div className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-1 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"></div>
        <div className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-1 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"></div>
        <div className="item w-full md:w-[365px]  h-80 bg-violet-700 rounded-md overflow-hidden  box-border test hover:-translate-y-1 transition duration-300 cursor-pointer test grayscale hover:grayscale-0"></div>
      </OwlCarousel>

      {/* Modal Project */}
      {showModal ? (
        <>
          <div className=" px-4 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
};

export default project;
