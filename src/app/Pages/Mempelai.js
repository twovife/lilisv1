import React from "react";

const Mempelai = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-12 space-y-16 lg:space-y-0 lg:flex gap-8">
        <div id="mempelai-wanita" className="text-center">
          <h2 className="text-2xl font-bold">NAMA MEMPELAI WANITA</h2>
          <p className="font-semibold">Putri dari</p>
          <p className="leading-5">
            Bapak Nama Bapak <br />& Nama Ibu
          </p>
          <img src={`/images/decoration3.png`} className="w-3/4 lg:w-2/4 mx-auto py-6 opacity-90" />
          <div className="w-[60vw] h-[90vw] lg:w-[20vw] lg:h-[30vw] mx-auto border-black">
            <img src={"/images/aset5.jpg"} className="object-cover w-full h-full object-top" />
          </div>
        </div>

        <div id="mempelai-laki" className="text-center">
          <h2 className="text-2xl font-bold">NAMA MEMPELAI WANITA</h2>
          <p className="font-semibold">Putri dari</p>
          <p className="leading-5">
            Bapak Nama Bapak <br />& Nama Ibu
          </p>
          <img src={`/images/decoration3.png`} className="w-3/4 lg:w-2/4 mx-auto py-6 opacity-90" />
          <div className="w-[60vw] h-[90vw] lg:w-[20vw] lg:h-[30vw] mx-auto border-black">
            <img src={"/images/aset3.jpg"} className="object-cover w-full h-full object-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mempelai;
