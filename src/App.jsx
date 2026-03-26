import "./App.css";
import Hero from "./components/banner/Hero";
import Navbar from "./components/navbar/Navbar";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {loading ? (
        <div className="flex justify-center items-center min-h-50">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <AvailablePlayers players={players} />
      )}
    </>
  );
}

export default App;
