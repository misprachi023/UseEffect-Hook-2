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
      {/* <p>Timer : {count} count</p> */}
      <h6>{formatTime(count)} </h6>
    </div>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h1>Timer App</h1>
      
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
// export default Timer;
