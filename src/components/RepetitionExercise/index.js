import { useState } from 'react';

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="screen">
      <div className="exercise-card exercise-card--column">
        <h1 className="heading">{name}</h1>
        <p className="count-display">{count}</p>
        <button className="btn-black" onClick={() => setCount(count + 1)}>
          + Rep
        </button>
        <button className="btn-white" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default RepetitionExercise;
