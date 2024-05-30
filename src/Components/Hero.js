import React from "react";
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg"

const Hero = () => {
  return (
    <div className="flex relative justify-center items-center text-white">
      <div>
        <span className="exordar text-[25rem]">R</span>
      </div>
      <div className="flex -space-x-10">
        <div className="bg-[#ed8f01] h-[28rem] w-[28rem] rounded-full z-10"></div>{" "}
        <img
          src={man1}
          alt=""
          className="rounded-full h-[28rem] w-[28rem] object-cover z-20"
        />
        <img
          src={man2}
          alt=""
          className="rounded-full h-[28rem] w-[28rem] object-cover z-30"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
