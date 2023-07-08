import React, { useEffect, useState } from "react";
import { Questrial, Parisienne, Dancing_Script } from "next/font/google";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const perisinne = Parisienne({ subsets: ["latin"], weight: ["400"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const questrial = Questrial({ subsets: ["latin"], weight: ["400"] });

const Jumbotron = () => {
  const [banner, setBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBanner(true);
    }, 500);
  });

  return (
    <section className={`h-[100vh] bg-[url(/images/aset8.jpg)] bg-no-repeat bg-cover bg-center relative z-0 ${questrial.className}`}>
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/10 z-20 left-0 top-0">
        <div
          className={`w-full h-1/2 justify-center items-center text-white text-center duration-500 delay-100 ${
            banner ? "opacity-100" : "opacity-0"
          }`}>
          <div className={`${dancing.className} text-6xl text-center text-white leading-tight tracking-wider mt-24`}>
            <span className={`${perisinne.className} text-3xl`}>The Wedding of</span>
            <br />
            Lilis <span className="text-3xl">&</span> Davit
          </div>
          <div className="text-2xl">Sabtu, 15 Juli 2023</div>
        </div>
      </div>
      <div className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-3 text-white/40">
        <span className="animate-bounce">Scoll Bawah</span>
        <BsFillArrowDownCircleFill className="w-8 h-8 animate-bounce" />
      </div>
      <div data-negative="false" className="z-10 absolute w-screen -left-3 rotate-180 -bottom-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" height={"28px"} width={"100%"}>
          <path
            className="fill-white"
            opacity="0.33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path
            className="fill-white"
            opacity="0.66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path
            className="fill-white"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Jumbotron;
