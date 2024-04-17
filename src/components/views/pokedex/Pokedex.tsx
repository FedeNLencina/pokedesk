import React, { useEffect } from "react";
import "./pokedex.css";

export default function Pokedex() {
  const urlApi: string = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchApi = async (urlApi: string) => {
      const response = await fetch(urlApi);
      response.json().then((json) => {
        console.log("json: ", json);
      });
    };
    fetchApi(urlApi);
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center pokemonInfoPokedexConteiner">
        <div className="pokemonInfoPokedex">Pokemon Info</div>
      </div>
      <div className="row pokemonsPokedex">
        <div className="col-lg-4 col-6 d-flex justify-content-center">
          Pokemon
        </div>
        <div className="col-lg-4 col-6 d-flex justify-content-center">
          Pokemon
        </div>
        <div className="col-lg-4 col-6 d-flex justify-content-center">
          Pokemon
        </div>
      </div>
    </div>
  );
}
