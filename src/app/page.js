"use client";
import Image from "next/image";
import CountdownTimer from "./Pages/CountdownTimer";
import Jumbotron from "./Pages/Jumbotron";
import Quotes from "./Pages/Quotes";
import Mempelai from "./Pages/Mempelai";
import { AiOutlineGift } from "react-icons/ai";
import { useState } from "react";
import Galery from "./Pages/Galery";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <main className="w-screenmin-h-screen overflow-x-hidden relative z-0">
      <Jumbotron />
      <Quotes />
      <Mempelai />
      <section className="bg-[url('/images/aset6.jpg')] bg-cover bg-no-repeat bg-top relative z-0">
        <div className="absolute w-full h-full z-10 bg-white/60"></div>
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto py-6 px-12 text-center">
            <div className="text-xl mb-4">Our Story</div>
            <div className="text-4xl">
              Watch our <br />
              best moments
            </div>
            <img src="/images/decoration2.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto -translate-y-3" />
            <Galery />
          </div>
        </div>
      </section>
      <section className="bg-white relative">
        <div className="max-w-7xl mx-auto py-6 px-12 text-center">
          <div className="py-6">
            <div className="text-4xl mb-3">
              You're
              <br />
              invited
            </div>
            <img src="/images/decoration1.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto" />
          </div>
          <div className="py-3 mb-3">
            <CountdownTimer targetTime={new Date("July 09, 2023 08:00:00")} />
            <button className="border px-8 py-4 rounded-xl text-xl bg-gray-800 text-white font-semibold">Save the date</button>
          </div>
          <div className="py-3">
            <div className="text-4xl font-black relative z-10">Akad Nikah</div>
            <img src="/images/decoration4.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto relative z-0 -translate-y-10" />
            <div className="flex justify-center items-center mb-3">
              <div className="text-3xl font-bold flex-1 text-right px-3">SABTU</div>
              <div className="text-center text-4xl border-l border-l-black border-r border-r-black font-semibold flex-1">
                <div>15</div>
                <div>2023</div>
              </div>
              <div className="text-3xl font-bold flex-1 text-left px-3 tracking-widest">Juli</div>
            </div>
            <div className="font-semibold text-lg mb-3">Pukul 09:00 wib - selesai</div>
          </div>
          <div className="py-3">
            <div className="text-4xl font-black relative z-10">Resepsi</div>
            <img src="/images/decoration4.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto relative z-0 -translate-y-10" />
            <div className="flex justify-center items-center mb-3">
              <div className="text-3xl font-bold flex-1 text-right px-3">SABTU</div>
              <div className="text-center text-4xl border-l border-l-black border-r border-r-black font-semibold flex-1">
                <div>15</div>
                <div>2023</div>
              </div>
              <div className="text-3xl font-bold flex-1 text-left px-3 tracking-widest">Juli</div>
            </div>
            <div className="font-semibold text-lg mb-3">Pukul 11:00 wib - selesai</div>
          </div>
          <div className="py-3">
            <h3 className="text-2xl font-medium">Lokasi</h3>
            <p className="font-semibold leading-relaxed">
              Sebelah Kins Store
              <br />
              Winong, Sidomulyo, Kec. Wates,
              <br /> Kabupaten Kediri, Jawa Timur 64174
            </p>
          </div>

          <div className="mb-6">
            <iframe
              className="border shadow-md mx-auto max-w-7xl w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.352683123626!2d112.0858772!3d-7.8581093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785865191f5c0f%3A0x16a43ca1e9e18505!2sKins%20Store!5e0!3m2!1sid!2sid!4v1688739800721!5m2!1sid!2sid"
              allowfullscreen=""
              height={300}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <button className="border px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold mb-6">Lihat Lokasi</button>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto py-6 px-12 text-center space-y-3">
          <AiOutlineGift className="text-black text-7xl mx-auto" />
          <p className="text-2xl font-semibold">Kirim Hadiah</p>
          <p className="max-w-lg mx-auto text-center">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
            memberi kado secara cashless.
          </p>
          <button className="border px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold mb-6" onClick={() => setModalShow(true)}>
            Nomor rekening
          </button>
        </div>
      </section>
      <section className="bg-[url('/images/aset7.jpg')] bg-cover bg-no-repeat bg-center relative z-0 h-[35vh]">
        <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-b from-white/60 to-gray-600/60 flex flex-col justify-center items-center">
          <div className="text-3xl">Terimakasih</div>
          <div className="max-w-md mx-auto text-center text-lg">
            Merupakan suatu kebahagiaan bila keluarga dan sahabatku tercinta bisa hadir dan merayakan hari bahagia ini bersama kami
          </div>
          <div className="text-sm">Kami yang berbahagia</div>
          <div className="text-3xl">Lilis & Davit</div>
        </div>
      </section>
      <div
        onClick={() => setModalShow(false)}
        className={`absolute h-screen shadow-lg w-full bg-transparent bottom-0 z-50 duration-300 ease-out backdrop-blur-sm ${
          modalShow ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className={`h-[70vh] bg-red-500 w-full absolute bottom-0`} onClick={(e) => e.stopPropagation()}>
          <div className="bg-gray-800 text-white text-center font-semibold">Weding Gift</div>
          <div className="px-12 py-6">
            <img src="/images/mandiri.png" alt="mandiri" className="w-1/2 max-w-md mx-auto" />
            <div className="text-center mb-3">
              <p className="text-lg">AN. Lilis Nopitasari</p>
              <div className="text-lg font-semibold">1710007617429</div>
            </div>
            <div className="text-center">
              <p className="text-lg">AN. David Surya P.</p>
              <div className="text-lg font-semibold">1710009922405</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
