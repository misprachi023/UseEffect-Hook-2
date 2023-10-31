import React, { useState, useEffect } from 'react';

function fixTimeString(num) {
  return num <= 9 ? `0${num}` : `${num}`;
}

const formatTime = (timeInSecs) => {
  const seconds = timeInSecs % 60;
  const minutes = Math.floor(timeInSecs / 60) % 60;
  const hours = Math.floor(timeInSecs / 3600);
  return `${fixTimeString(hours)}:${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
};

function Timer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true); 

  useEffect(() => {
    let timer;

    if (running) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [count, running]);

  const handleStop = () => {
    setRunning(false);
  };

  const handleStart = () => {
    setRunning(true);
  };

  const handleReset = () => {
    setCount(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Timer App</h1>
      <h3>{formatTime(count)}</h3>

      <button onClick={running ? handleStop : handleStart}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
