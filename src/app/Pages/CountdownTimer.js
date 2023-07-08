"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetTime }) {
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      updateDate();
    }, 1000);
  }, []);

  function updateDate() {
    const now = new Date().getTime();
    const timeleft = targetTime - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setDuration({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  return (
    <div className="flex justify-center gap-3 max-w-md mx-auto mb-3 text-brand-biru">
      <div
        data-aos="flip-left"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
        className="flex flex-col text-center bg-gray-800 text-white p-5 lg:p-8 rounded-lg">
        <p className="text-2xl lg:text-4xl font-semibold">{`${duration.days < 0 ? 0 : duration.days}`}</p>
        <p>Hari</p>
      </div>

      <div
        data-aos="flip-left"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
        className="flex flex-col text-center bg-gray-800 text-white p-5 lg:p-8 rounded-lg">
        <p className="text-2xl lg:text-4xl font-semibold">{`${duration.hours < 0 ? 0 : duration.hours}`}</p>
        <p>Jam</p>
      </div>

      <di
        data-aos="flip-left"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
        v
        className="flex flex-col text-center bg-gray-800 text-white p-5 lg:p-8 rounded-lg">
        <p className="text-2xl lg:text-4xl font-semibold">{`${duration.minutes < 0 ? 0 : duration.minutes}`}</p>
        <p>Menit</p>
      </di>

      <div
        data-aos="flip-left"
        data-aos-delay="400"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
        className="flex flex-col text-center bg-white text-gray-800 p-5 lg:p-8 lg:border-gray-800 border-2 rounded-lg">
        <p className="text-2xl lg:text-4xl font-medium">{`${duration.seconds < 0 ? 0 : duration.seconds}`}</p>
        <p>Detik</p>
      </div>
    </div>
  );
}
