"use client";
import Image from "next/image";
import CountdownTimer from "./Pages/CountdownTimer";
import Jumbotron from "./Pages/Jumbotron";
import Quotes from "./Pages/Quotes";
import Mempelai from "./Pages/Mempelai";
import { AiOutlineGift } from "react-icons/ai";
import { BsEnvelopeOpenHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Galery from "./Pages/Galery";
import AOS from "aos";
import "aos/dist/aos.css";
import { Questrial, Parisienne, Dancing_Script, Abril_Fatface } from "next/font/google";

const perisinne = Parisienne({ subsets: ["latin"], weight: ["400"] });
const questrial = Questrial({ subsets: ["latin"], weight: ["400"] });
const abril = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Home(props) {
  const [modalShow, setModalShow] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isPlayerShow, setIsPlayerShow] = useState(false);
  const [banner, setBanner] = useState(true);

  const playAudio = (isPlay) => {
    if (isPlay) {
      audio?.play();
      setIsPlay(true);
      return;
    }
    audio?.pause();
    setIsPlay(false);
  };

  const bannerHandler = (e) => {
    window.scrollTo({ top: 0 });
    playAudio(true);
    setIsPlayerShow(true);
    setTimeout(() => {
      setBanner(false);
    }, 500);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      // anchorPlacement: "bottom-bottom",
    });
    setAudio(new Audio("/music/lagune.mp3"));
  }, []);

  return (
    <main className={`w-screenmin-h-screen overflow-x-hidden relative z-0 ${questrial.className}`}>
      <button
        onClick={() => playAudio(!isPlay)}
        className={`fixed transition z-40 flex items-center justify-center w-12 h-12 border border-black rounded-full bottom-16 right-2 bg-white/50 ${
          isPlayerShow ? "opacity-100" : "opacity-0"
        }`}>
        <Image alt="playback" src={isPlay ? "/stop.svg" : "/play.svg"} width={20} height={20} />
      </button>
      <div
        className={`${
          banner ? `translate-y-0` : `-translate-y-full`
        } bg-[url('/images/aset1.jpg')] bg-cover bg-bottom lg:bg-center bg-no-repeat w-full h-screen fixed top-0 z-50 duration-500`}>
        <div className="max-w-7xl mx-auto flex justify-evenly items-center flex-col w-full h-full">
          <div data-aos="fade-up" className={`${dancing.className} text-7xl text-center text-white leading-relaxed tracking-wider`}>
            <span className={`${perisinne.className} text-3xl`}>The Wedding of</span>
            <br />
            Lilis <span className="text-3xl">&</span> Davit
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className={`text-center`}>
            <div className="text-white text-xl underline">Special Invit to :</div>
            <div className="text-white text-xl font-bold uppercase">{props.searchParams.to ?? ""}</div>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white flex px-4 py-2 rounded-lg gap-3 items-center justify-evenly text-lg border-2 border-dotted"
            onClick={bannerHandler}>
            <BsEnvelopeOpenHeartFill />
            <span>Open</span>
          </button>
        </div>
      </div>

      {!banner && (
        <>
          <Jumbotron banner={!banner} />
          <Quotes />
          <Mempelai />
          <section className="bg-[url('/images/aset6.jpg')] bg-cover bg-no-repeat bg-top relative z-0">
            <div className="absolute w-full h-full z-10 bg-white/60"></div>
            <div className="relative z-20">
              <div data-aos="fade-down" className="max-w-7xl mx-auto py-6 px-12 text-center">
                <div className={`text-2xl mb-2`}>Our Story</div>
                <div className={`text-4xl ${abril.className}`}>
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
              <div data-aos="fade-down" className="py-6">
                <div className={`${abril.className} text-4xl mb-3`}>
                  You are
                  <br />
                  invited
                </div>
                <img src="/images/decoration1.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto" />
              </div>
              <div className="py-3 mb-3">
                <CountdownTimer targetTime={new Date("July 09, 2023 08:00:00")} />
                <button
                  onClick={() =>
                    window.open(
                      "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230715%2F20230716&details=jangan%20lupa%20dateng%20ya%20gais%2C%20kehadiran%20kalian%20sangat%20kami%20nantikan&location=&text=Nikahan%20Lilis%20%26%20David",
                      "_blank"
                    )
                  }
                  data-aos="flip-left"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  className="border px-8 py-4 rounded-xl text-xl bg-gray-900 text-white font-semibold">
                  Save the date
                </button>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="py-3">
                <div className={`text-4xl font-black relative z-10 ${abril.className}`}>Akad Nikah</div>
                <img src="/images/decoration4.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto relative z-0 -translate-y-5" />
                <div className="flex justify-center items-center mb-3">
                  <div className="text-2xl lg:text-3xl font-bold flex-1 text-right px-3">SABTU</div>
                  <div className="text-center text-3xl lg:text-4xl border-l border-l-black border-r border-r-black font-semibold flex-1">
                    <div>15</div>
                    <div>2023</div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold flex-1 text-left px-3 tracking-widest">Juli</div>
                </div>
                <div className="font-semibold text-lg mb-3">Pukul 09:00 wib - selesai</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="py-3">
                <div className={`text-4xl font-black relative z-10 ${abril.className}`}>Resepsi</div>
                <img src="/images/decoration4.png" alt="hand-sign" className="w-1/3 lg:w-1/6 mx-auto relative z-0 -translate-y-5" />
                <div className="flex justify-center items-center mb-3">
                  <div className="text-2xl lg:text-3xl font-bold flex-1 text-right px-3">SABTU</div>
                  <div className="text-center text-3xl lg:text-4xl border-l border-l-black border-r border-r-black font-semibold flex-1">
                    <div>15</div>
                    <div>2023</div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold flex-1 text-left px-3 tracking-widest">Juli</div>
                </div>
                <div className="font-semibold text-lg mb-3">Pukul 11:00 wib - selesai</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="py-3">
                <h3 className="text-2xl font-semibold">Lokasi</h3>
                <p className="font-semibold leading-relaxed">
                  Sebelah Kins Store
                  <br />
                  Winong, Sidomulyo, Kec. Wates,
                  <br /> Kabupaten Kediri, Jawa Timur 64174
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="mb-6">
                <iframe
                  className="border shadow-md mx-auto max-w-7xl w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.352683123626!2d112.0858772!3d-7.8581093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785865191f5c0f%3A0x16a43ca1e9e18505!2sKins%20Store!5e0!3m2!1sid!2sid!4v1688739800721!5m2!1sid!2sid"
                  allowFullScreen=""
                  height={300}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <button
                onClick={() => window.open("https://goo.gl/maps/wtasu3qBEc85Knja6", "_blank")}
                data-aos="flip-left"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
                className="border px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold mb-6">
                Lihat Lokasi
              </button>
            </div>
          </section>
          <section>
            <div data-aos="fade-up" data-aos-delay="200" className="max-w-7xl mx-auto py-6 px-12 text-center space-y-3">
              <AiOutlineGift className="text-black text-7xl mx-auto" />
              <p className={`text-2xl font-semibold ${abril.className}`}>Kirim Hadiah</p>
              <p className="max-w-lg mx-auto text-center">
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda
                dapat memberi kado secara cashless.
              </p>
              <button
                data-aos="flip-left"
                className="border px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold mb-6"
                onClick={() => setModalShow(true)}>
                Nomor rekening
              </button>
            </div>
          </section>
          <section className="bg-[url('/images/aset7.jpg')] bg-cover bg-no-repeat bg-center relative z-0 h-[35vh]">
            <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-b from-white/60 to-gray-600/60 flex flex-col justify-center items-center">
              <div className={`text-5xl font-normal ${perisinne.className}`}>Terimakasih</div>
              <div className="max-w-md mx-auto font-semibold text-center text-lg">
                Merupakan suatu kebahagiaan bila keluarga dan sahabatku tercinta bisa hadir dan merayakan hari bahagia ini bersama kami
              </div>
              <div className="text-sm font-semibold underline underline-offset-2 mb-5">Kami yang berbahagia</div>
              <div className={`text-4xl ${dancing.className}`}>Lilis & Davit</div>
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
        </>
      )}
    </main>
  );
}
