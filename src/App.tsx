import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/views/home/Home";
import Pokedex from "./components/views/pokedex/Pokedex";
import PokemonsUser from "./components/views/pokemonsUser/PokemonsUser";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/misPokemons" element={<PokemonsUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
