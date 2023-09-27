import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

import "./index.css";
import "./style.css";

import Track from "./components/Track";
import TIM_TIM from "./components/Tim_Tim";
import AcompLish from "./components/AcompLish";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Track />
      <TIM_TIM />
      <AcompLish />
    </div>
  );
}

export default App;
