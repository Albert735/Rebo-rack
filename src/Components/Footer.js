import React from "react";
import woman from "../assets/naked-black-young-female-singing-headset-studio.jpg";
import vinyl from "../assets/vinyl-record-cassette-tape-design-resource.jpg";
import creator from "../assets/portrait-male-audio-engineer-using-sound-mixer.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[100dvw] text-white px-[2rem] ">
      <div className="flex bg-white/20 rounded-xl p-4">
        <span>
          <h1>SOUNDRAW for Artiste</h1>
          <ul className="p-[1.75rem]">
            <li className="list-disc ">A simple license</li>
            <li className="list-disc ">Monetize your songs</li>
          </ul>
          <button className="border-2 rounded-full px-2 py-1 mx-3 my-2">
            Learn more
          </button>
        </span>
        <img src={woman} alt="" className="h-[12rem] w-[12rem] rounded-xl" />
      </div>
      <div className="flex bg-white/20 rounded-xl p-4 gap-5">
        <span className="flex justify-center items-start ">
          <ul className="p-[1rem] space-y-9">
            <li className="bg-[#ed8f01] px-2 py-1 rounded-full text-center">
              Hip-Hop
            </li>
            <li className="bg-[#a78552] px-2 py-1 rounded-full text-center">
              Trap
            </li>
            <li className="bg-[#d9ab65] px-2 py-1 rounded-full text-center">
              R&b
            </li>
          </ul>
          <ul className="p-[1rem] space-y-9">
            <li className="bg-[#f3ad45] px-4 py-1 rounded-full text-center">
              Drill
            </li>
            <li className="bg-[#724f1b] px-4 py-1 rounded-full text-center">
              Latin
            </li>
            <li className="bg-[#f9ab3d] px-4 py-1 rounded-full text-center">
              Club
            </li>
          </ul>
        </span>
        <img
          src={vinyl}
          alt=""
          className="h-[12rem] w-[12rem] rounded-xl object-cover"
        />
      </div>
      <div className="flex bg-white/20 rounded-xl p-4 gap-5">
        <span>
          <h1>SOUNDRAW for Creators</h1>
          <ul className="p-[1.75rem]">
            <li className="list-disc ">True royalty-fee</li>
            <li className="list-disc ">The license is over</li>
          </ul>
          <button className="border-2 rounded-full px-2 py-1 mx-3 my-2">
            Learn more
          </button>
        </span>
        <img
          src={creator}
          alt=""
          className="h-[12rem] w-[12rem] rounded-xl object-cover brightness-125"
        />
      </div>
    </div>
  );
};

export default Footer;
