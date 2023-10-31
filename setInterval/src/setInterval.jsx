import React, { useState, useEffect } from "react";

function fixtimeString(num) {
  return num <= 9 ? `0${num}` : `${num}`;
}

const formatTime = (timeInSecs) => {
  const seconds = timeInSecs % 60;
  const minutes = Math.floor(timeInSecs / 60) % 60;
  const hours = Math.floor(timeInSecs / 3600);
  return `${fixtimeString(hours)}:${fixtimeString(minutes)}:${fixtimeString(
    seconds
  )}`;
};

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((precount) => precount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Timer App</h1>
      <h3>{formatTime(count)} </h3>
    </div>
  );
}



  



export default Timer;
