import './App.css';
import IntroWeekList from './components/IntroWeekList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Progress Check</h1>
        <p>
          This is a collection of all the learning objectives you will cover throughout the course. You can use this throughout the course to keep track of your progress and see how far you've come since the start of the course. Hopefully you can also use this document to pinpoint your weak points that could do with a bit of training and mention these to your mentor to see what they recommend to help.
        </p>
      </header>
      <IntroWeekList />
    </div>
  );
}

export default App;
