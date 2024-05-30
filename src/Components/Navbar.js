import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white w-[100dvw] ">
      <div className="p-7">
        <span>Rebo</span>
        <span>Rack</span>
      </div>
      <div className="p-7">
        <ul className="flex justify-center items-center gap-10">
          <li>Home</li>
          <li>License</li>
          <li>About</li>
          <li>Create Music</li>
        </ul>
      </div>
      <div className="p-7">
        <button>Log in</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
