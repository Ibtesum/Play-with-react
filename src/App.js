import Clock from "./components/Clock";
import StateTutorial from "./components/StateTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
function App() {
  return (
    <div className="App">
      <Clock locale="bn-BD" />
      <StateTutorial />
      <ReducerTutorial />
    </div>
  );
}

export default App;
