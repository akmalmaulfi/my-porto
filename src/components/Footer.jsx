const footer = () => {
  return (
    <footer className="font-poppins  from-slate-100 to-neutral-800  w-full text-center font-light text-sm pt-16 pb-14">
      <div className="w-full flex gap-3 justify-center items-center">
        <a href="">
          <div
            className="w-16 h-16  bg-neutral-900 flex justify-center items-center text-white text-3xl hover:border-violet-700 hover:bg-violet-700 hover:text-white transition hover:-translate-y-2"
            id="detail"
          >
            <i className="fa-brands fa-github"></i>
          </div>
        </a>
        <a href="">
          <div
            className="w-16 h-16  bg-neutral-900 flex justify-center items-center text-white text-3xl hover:border-violet-700 hover:bg-violet-700 hover:text-white transition hover:-translate-y-2"
            id="detail"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </a>
        <a href="">
          <div
            className="w-16 h-16  bg-neutral-900 flex justify-center items-center text-white text-3xl hover:border-violet-700 hover:bg-violet-700 hover:text-white transition hover:-translate-y-2"
            id="detail"
          >
            <i class="fa-brands fa-instagram"></i>
          </div>
        </a>
        <a href="">
          <div
            className="w-16 h-16  bg-neutral-900 flex justify-center items-center text-white text-3xl hover:border-violet-700 hover:bg-violet-700 hover:text-white transition hover:-translate-y-2"
            id="detail"
          >
            <i class="fa-regular fa-envelope"></i>
          </div>
        </a>
      </div>
      <a href="">
        <div className=" text-center w-[290px]  mx-auto bg-neutral-900 border border-neutral-800 mt-4 text-neutral-200 font-poppins py-3 tracking-widest uppercase 1 hover:bg-gradient-to-r from-purple-700 to-fuchsia-500 hover:border-neutral-800 transition duration-300 font-light">
          Download CV
        </div>
      </a>
      <h3 className="text-sm text-neutral-300 bg-clip-text text-transparent bg-gradient-to-r mt-16">
        2024 © Akmal Maulfi
      </h3>
    </footer>
  );
};

export default footer;
