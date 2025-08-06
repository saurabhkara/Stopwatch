import { useRef, useState } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const startTimeRef = useRef(0);
  const timerIdRef = useRef(null);

  const handleStart = () => {
    startTimeRef.current = new Date().getTime() - time;
    timerIdRef.current = setInterval(() => {
      let diffTime = new Date().getTime() - startTimeRef.current;
      setTime(diffTime);
    }, 10);
    console.log(startTimeRef.current);
  };

  function handlePause() {
    clearInterval(timerIdRef.current);
  }

  function reset() {
    clearInterval(timerIdRef.current);
    setTime(0);
  }
  return (
    <div>
      <h4>Count Down timer</h4>
      <h1>{time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
