import { useState } from "react";
import "./App.css";
import Hero from "./components/banner/Hero";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/Players/Players";

function App() {
  const [coins, setCoins] = useState(8000);
  return (
    <>
      <Navbar coins={coins} />
      <Hero />
      <Players coins={coins} setCoins={setCoins} />
    </>
  );
}

export default App;
