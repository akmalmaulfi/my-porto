import React, { useState } from "react";

const skill = () => {
  const [activeContent, setActiveContent] = useState("");
  return (
    <section
      id="skill-title"
      className="w-full  border-neutral-800   h-full relative font-poppins py-12 "
    >
      <div className="container mx-auto">
        <h3
          className="px-8 text-4xl text-center md:text-left md:text-5xl font-extrabold  text-white font-poppins  mb-8 tracking-wide uppercase"
          id="skills"
        >
          Skills
        </h3>
        <div className="text-neutral-200 text-center mb-5 flex justify-center items-center gap-2">
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
            className="border-2 border-neutral-700 px-6 py-2  hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:border-neutral-800 transition duration-300"
            id="frontendBtn"
            onClick={() => setActiveContent("")}
          >
            All
          </button>
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
            className="border-2 border-neutral-700 px-6 py-2  hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:border-neutral-800 transition duration-300"
            id="frontendBtn"
            onClick={() => setActiveContent("frontend")}
          >
            Front End
          </button>
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
            className="border-2 border-neutral-700 px-6 py-2  hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:border-neutral-800 transition duration-300"
            id="backendBtn"
            onClick={() => setActiveContent("backend")}
          >
            Back End
          </button>
          <button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="500"
            className="border-2 border-neutral-700 px-6 py-2  hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:border-neutral-800 transition duration-300"
            id="frameworkBtn"
            onClick={() => setActiveContent("framework")}
          >
            Framework
          </button>
        </div>
        <div className="w-full max-h-[256px] md:max-h-full flex flex-wrap justify-center gap-3 px-8 box-border py-5">
          {(activeContent === "frontend" || activeContent === "") && (
            <>
              <div
                data-aos="fade-up"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500 box-border"
                id="frontend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  BOOTSTRAP
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="frontend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                />
                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  TAILWIND
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="frontend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]"
                />
                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  JAVASCRIPT
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="frontend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  REACTJS
                </p>
              </div>
            </>
          )}

          {(activeContent === "backend" || activeContent === "") && (
            <>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="backend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  GIT
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="backend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                />
                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  PHP
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="backend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                />
                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  MYSQL
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
                />

                <p
                  className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300"
                  id="backend"
                >
                  POSTGRE
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="backend"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  MONGO
                </p>
              </div>
            </>
          )}

          {(activeContent === "framework" || activeContent === "") && (
            <>
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]"
                  id="backend"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  NODEJS
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="framework"
              >
                <i className="devicon-express-original text-4xl text-white"></i>

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  EXPRESS
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="1100"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="framework"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg"
                  className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  CODEIGNITER
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="1200"
                className="box  w-[15%] h-14 bg-neutral-900 flex  justify-center items-center grayscale hover:grayscale-0 cursor-pointer hover:border border-2 border-neutral-800  group rounded-md transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500"
                id="framework"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]"
                />

                <p className="text-neutral-200 text-[13px] md:text-sm hidden md:group-hover:block ml-[2px] md:ml-1 transition duration-300">
                  LARAVEL
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default skill;
