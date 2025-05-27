import { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const formatDate = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let dayName = days[time.getDay()];
    let day = time.getDate().toString().padStart(2, "0");
    let monthName = months[time.getMonth()];
    let year = new Date().getFullYear();
    let lastTwoDigits = year % 100;
    console.log(lastTwoDigits);

    return `${dayName},${day}-${monthName}-${lastTwoDigits}`;
  };

  return (
    <div className="outerbox">
      <div className="clock-container">
        <div className="date">{formatDate()}</div>
        <div className="clock">{formatTime()}</div>
      </div>
    </div>
  );
}

export default DigitalClock;
