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
      <div className="flex flex-col text-center bg-gray-800 text-white p-8 rounded-lg">
        <p className="text-4xl font-semibold">{`${duration.days < 0 ? 0 : duration.days}`}</p>
        <p>Hari</p>
      </div>

      <div className="flex flex-col text-center bg-gray-800 text-white p-8 rounded-lg">
        <p className="text-4xl font-semibold">{`${duration.hours < 0 ? 0 : duration.hours}`}</p>
        <p>Jam</p>
      </div>

      <div className="flex flex-col text-center bg-gray-800 text-white p-8 rounded-lg">
        <p className="text-4xl font-semibold">{`${duration.minutes < 0 ? 0 : duration.minutes}`}</p>
        <p>Menit</p>
      </div>

      <div className="flex flex-col text-center bg-white text-gray-800 border-gray-800 border-2 p-8 rounded-lg">
        <p className="text-4xl font-medium">{`${duration.seconds < 0 ? 0 : duration.seconds}`}</p>
        <p>Detik</p>
      </div>
    </div>
  );
}
