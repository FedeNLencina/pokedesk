import React, { useEffect, useState } from "react";
import "./pokedex.css";
import mockList from "../../utils/mocks/pokedexDataMock.json";
import pikachu from "../../../assets/images/pikachu.jpg";
import { getRandomNumber } from "../../utils/mocks/getRandomNumber";

export default function Pokedex() {
  const urlApi: string = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonPokedexView, setFirstPokemon] = useState(null);
  useEffect(() => {
    const fetchApi = async (urlApi: string) => {
      try {
        const response: Response = await fetch(urlApi);
        const data = await response.json();
        const { results } = data;

        const pokemons = results.map(async (pokemon: any) => {
          const pokemonUrl = await fetch(pokemon.url);

          const pokemonData = await pokemonUrl.json();
          const poke = {
            id: pokemonData.id,
            name: pokemonData.name,
            img: pokemonData.sprites?.other?.dream_world?.front_default,
          };

          return poke;
        });

        getRandomList(await Promise.all(pokemons));
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi(urlApi);
  }, []);

  const getRandomList = (list) => {
    const listaRandom = [];
    if (list.length > 0) {
      for (let i = 0; i < 10; i++) {
        const randomNumber = getRandomNumber(list.length);
        const pokemon = list[randomNumber];
        console.log("pokemon elegido aleatoriamente: ", pokemon);
        if (!listaRandom.includes(pokemon)) listaRandom.push(pokemon);
      }
      setPokemonList(listaRandom);
      setFirstPokemon(listaRandom[0]);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center row pokemonInfoPokedexConteiner">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center pokedexPokemonPhoto">
          <img className="img-fluid" src={pokemonPokedexView?.img}></img>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center pokedexPokemonInfo">
          <div>Nombre: {pokemonPokedexView?.name}</div>
          <div>Tipo: {}</div>
          <div>Debilidad: {}</div>
        </div>
      </div>
      <div className="row pokemonsPokedex">
        {pokemonList.map((pokemon) => {
          return (
            <div className="col-lg-4 col-6 d-flex flex-column justify-content-center pokedexPokemon">
              <div>
                <img className="img-fluid" src={pokemon.img}></img>
              </div>
              <div className="text-center">{pokemon.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
