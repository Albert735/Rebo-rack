import React from "react";
import man1 from "../assets/man1.jpg";
import man2 from "../assets/man2.jpg";

const Hero = () => {
  return (
    <div className="flex relative justify-center items-center text-white gap-2">
      <div>
        <span className="exordar text-[25rem]">R</span>
      </div>
      <div className="flex -space-x-20">
        <div className="bg-[#ed8f01] h-[25rem] w-[25rem] rounded-full z-10  relative">
          <div className="flex absolute flex-col justify-center items-start top-[8rem] left-[3rem]">
            <p className="leading-loose">
              Create your own beats with the <br />
              power of AI
            </p>
            <p className="font-bold text-[1.25rem]">
              Welcome to thw music <br /> AI generation
            </p>
            <button className="text-black bg-white px-4 py-3 rounded-full my-3">
              Try it for free
            </button>
          </div>
        </div>
        <img
          src={man1}
          alt=""
          className="rounded-full h-[25rem] w-[25rem] object-cover z-20"
        />

        <img
          src={man2}
          alt=""
          className="rounded-full h-[25rem] w-[25rem] object-cover z-30"
        />
      </div>
      <div className="absolute flex top-[20rem] justify-between w-[350rem] left-[45rem] exordar z-40">
        <p className=" justify-center items-center text-[4rem]"> Rebo</p>
        <button className="text-black bg-white font-sans px-4 py-0 z-50">
          Learn more
        </button>
      </div>
      <div>
        <span className="exordar text-[25rem] ">O</span>
      </div>
    </div>
  );
};

export default Hero;
