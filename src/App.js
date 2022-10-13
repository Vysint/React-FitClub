import Hero from "./components/Hero";
import "./App.css";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";


function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      <Reasons/>
    </div>
  );
}

export default App;
