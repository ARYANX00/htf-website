import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

import "./index.css";
import "./style.css";
import Track from "./components/Track";
import TIM_TIM from "./components/Tim_Tim";
import AcompLish from "./components/AcompLish";
import Sponsers from "./components/sponsers";
import Teams from "./components/Teams";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Track />
      <TIM_TIM />
      <AcompLish />
      <Sponsers />
      <Teams />
    </div>
  );
}

export default App;
