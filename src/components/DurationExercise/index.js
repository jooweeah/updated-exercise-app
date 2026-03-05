import { useState, useEffect } from 'react';

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  function handleReset() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div className="screen">
      <div className="exercise-card exercise-card--column">
        <h1 className="heading">{name}</h1>
        <p className="count-display">{formatTime(seconds)}</p>
        <button className="btn-black" onClick={() => setRunning(!running)}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button className="btn-white" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default DurationExercise;
