import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white w-[100dvw] ">
      <div className="p-7 ">
        <span className="besport text-[1.7rem]">REBO</span>
        <span className="besport text-[1.7rem] bg-[#ed8f01] rounded-full px-2">RACK</span>
      </div>
      <div className=" bg-white/10 rounded-full px-5">
        <ul className="flex justify-center items-center gap-[4dvw] p-2.5">
          <li className="hover:bg-white hover:text-black transition-all ease-in-out px-2 py-1 rounded-full">
            Home
          </li>
          <li className="hover:bg-white hover:text-black transition-all ease-in-out px-2 py-1 rounded-full">
            About
          </li>
          <li className="hover:bg-white hover:text-black transition-all ease-in-out px-2 py-1 rounded-full">
            License
          </li>
          <li className="hover:bg-white hover:text-black transition-all ease-in-out px-2 py-1 rounded-full">
            Create Music
          </li>
        </ul>
      </div>
      <div className="flex p-7 gap-[1dvw]">
        <button className="border-2 rounded-full px-2 py-1">Log in</button>
        <button className="border-2 border-[#ed8f01] bg-[#ed8f01] rounded-full px-2 py-1">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
