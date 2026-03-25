import "./App.css";
import Hero from "./components/banner/Hero";
import Navbar from "./components/navbar/Navbar";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AvailablePlayers />
    </>
  );
}

export default App;
