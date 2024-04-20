import React, { useEffect, useState } from "react";
import "./pokedex.css";
import mockList from "../../utils/mocks/pokedexDataMock.json";
import pikachu from "../../../assets/images/pikachu.jpg";

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

  const [pokemonList, setPokemonList] = useState(mockList.list);

  return (
    <div className="container">
      <div className="d-flex justify-content-center row pokemonInfoPokedexConteiner">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center pokedexPokemonPhoto">
          <img className="img-fluid" src={pikachu}></img>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center pokedexPokemonInfo">
          <div>Pikachu</div>
          <div>Electrico</div>
        </div>
      </div>
      <div className="row pokemonsPokedex">
        {pokemonList.map((pokemon) => {
          return (
            <div className="col-lg-4 col-6 d-flex flex-column justify-content-center pokedexPokemon">
              <div>
                <img className="img-fluid" src={pikachu}></img>
              </div>
              <div className="text-center">{pokemon.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
