const Navbar = () => {
  return (
    <nav className="flex items-center md:mx-20 px-10 text-neutral-400 font-poppins  md:border-b-2 py-4 md:border-neutral-900  font-light text-base ">
      <div className="w-[20%] text-center justify-center flex">
        <a
          href=""
          className="border p-2 rounded-full hover:bg-slate-100 text-neutral-950"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#a3a3a3"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
        </a>
      </div>
      <div className="w-[80%]">
        <ul className="flex justify-evenly" id="navlink">
          <li className="hover:text-slate-100 px-2">
            <a href="">Home</a>
          </li>
          <li className="hover:text-slate-100  px-2">
            <a href="">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
