import Image from "next/image";
import React from "react";

const Quotes = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto pt-12 pb-6 px-12">
        <figure data-aos="fade" data-aos-anchor-placement="center-bottom" className="w-full mx-auto text-center space-y-3 mb-3">
          <svg
            className="w-10 h-10 mx-auto text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-lg lg:text-2xl italic text-gray-900 font-semibold">
              &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar
              kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.&quot;
            </p>
          </blockquote>
          <figcaption data-aos="fade" data-aos-delay="100" className="flex items-center justify-center">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <cite className="text-sm text-gray-500">- Q.S. Ar-Rum: 21 -</cite>
            </div>
          </figcaption>
        </figure>
        <div
          data-aos="fade"
          data-aos-anchor-placement="bottom-bottom"
          className="mx-auto w-[35vw] h-[35vw] lg:w-[10vw] lg:h-[10vw] flex justify-center items-center">
          <Image alt="praweding" src={"/images/decoration1.png"} style={{ objectFit: "cover" }} quality={100} width={1000} height={1000} />
        </div>
      </div>
    </section>
  );
};

export default Quotes;
