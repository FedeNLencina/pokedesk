import React, { useEffect } from "react";
import { useFetchApi } from "../../hooks/useFetchApi";

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
    <div className="container-fluid">
      <div className="row pokemonInfo"></div>
      <div className="row pokemons">
        <div></div>
      </div>
    </div>
  );
}
