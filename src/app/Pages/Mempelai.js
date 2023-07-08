import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import React from "react";

const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

const Mempelai = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-12 space-y-16 lg:space-y-0 lg:flex gap-8">
        <div id="mempelai-wanita" className="text-center">
          <h2
            data-aos="fade"
            data-aos-delay="100"
            data-aos-anchor-placement="center-bottom"
            className={`text-3xl font-bold ${abril.className}`}>
            Lilis nopitasari
          </h2>
          <p data-aos="fade" data-aos-delay="200" data-aos-anchor-placement="center-bottom" className="font-semibold">
            Putri dari
          </p>
          <p data-aos="fade" data-aos-delay="300" data-aos-anchor-placement="center-bottom" className="leading-5">
            Bapak Juli Purwoko <br />& Ibu Juwati
          </p>
          <img
            data-aos="fade"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
            src={`/images/decoration3.png`}
            className="w-3/4 lg:w-2/4 mx-auto py-6 opacity-90"
          />
          <div
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="w-[60vw] h-[90vw] lg:w-[20vw] lg:h-[30vw] mx-auto border-black">
            <Image
              alt="praweding"
              src={"/images/aset5.jpg"}
              priority
              height={500}
              width={500}
              className="object-cover w-full h-full object-top"
            />
          </div>
        </div>

        <div data-aos-anchor-placement="center-bottom" id="mempelai-laki" className="text-center">
          <h2
            data-aos="fade"
            data-aos-delay="100"
            data-aos-anchor-placement="center-bottom"
            className={`text-3xl font-bold ${abril.className}`}>
            David surya pratama
          </h2>
          <p data-aos="fade" data-aos-delay="200" data-aos-anchor-placement="center-bottom" className="font-semibold">
            Putra dari
          </p>
          <p data-aos="fade" data-aos-delay="300" data-aos-anchor-placement="center-bottom" className="leading-5">
            Bapak Baden Sudrajat ( Alm ) <br />& Ibu Sholikah
          </p>
          <img
            data-aos="fade"
            data-aos-delay="300"
            data-aos-anchor-placement="center-bottom"
            src={`/images/decoration3.png`}
            className="w-3/4 lg:w-2/4 mx-auto py-6 opacity-90"
          />
          <div
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
            className="w-[60vw] h-[90vw] lg:w-[20vw] lg:h-[30vw] mx-auto border-black">
            <Image
              alt="praweding"
              src={"/images/aset3.jpg"}
              height={500}
              width={500}
              className="object-cover w-full h-full object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mempelai;
