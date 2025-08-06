import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const startTimeRef = useRef(0);
  const timerIdRef = useRef(null);

  const handleStart = () => {
    if (timerIdRef.current) {
      return;
    }
    startTimeRef.current = new Date().getTime() - time;
    timerIdRef.current = setInterval(() => {
      let diffTime = new Date().getTime() - startTimeRef.current;
      setTime(diffTime);
    }, 10);
  };

  const handlePause = () => {
    console.log("paused");
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  function reset() {
    clearInterval(timerIdRef.current);
    setTime(0);
  }

  function formatTime() {
    const milSec = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const second = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((time / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const hour = Math.floor(time / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    return `${hour}:${minute}:${second}:${milSec}`;
  }
  return (
    <div>
      <h4>Count Down timer</h4>
      <div className="time">
        <h1 className="formatedTimeText">{formatTime()}</h1>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
