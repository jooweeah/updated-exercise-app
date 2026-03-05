import { Component } from 'react';
import './App.css';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';

const exercises = [
  { name: 'Push Ups', type: 'repetition' },
  { name: 'Running', type: 'running' },
  { name: 'Plank', type: 'duration' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentExercise: null };
  }

  render() {
    const { currentExercise } = this.state;

    if (currentExercise === null) {
      return (
        <div className="screen">
          <h1 className="heading">Exercises</h1>
          {exercises.map(ex => (
            <div key={ex.name} className="exercise-card">
              <span className="card-name">{ex.name}</span>
              <button
                className="btn-black"
                onClick={() => this.setState({ currentExercise: ex })}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      );
    }

    if (currentExercise.type === 'running') {
      return <RunningExercise name={currentExercise.name} />;
    }

    if (currentExercise.type === 'duration') {
      return <DurationExercise name={currentExercise.name} />;
    }

    return <RepetitionExercise name={currentExercise.name} />;
  }
}

export default App;
