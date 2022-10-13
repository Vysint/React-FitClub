import Hero from "./components/Hero";
import "./App.css";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";


function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
