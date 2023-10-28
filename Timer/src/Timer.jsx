import React, { useState, useEffect } from 'react';


function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <div>
      <p>Timer : {seconds} seconds</p>
    </div>
  );
}


function App() {
  const [showTimer, setShowTimer] = useState(true);
  
  return (
    <div>
      <h1>Timer App</h1>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
// export default Timer;
