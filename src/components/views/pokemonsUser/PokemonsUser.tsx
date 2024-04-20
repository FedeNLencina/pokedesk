import React, { useState } from "react";
import mockList from "../../utils/mocks/pokedexDataMock.json";
import pikachu from "../../../assets/images/pikachu.jpg";

export default function PokemonsUser() {
  const [pokemonUserList, setPokemonUserList] = useState(mockList.list);

  return (
    <div className="container">
      <div className="row pokemonsPokedex">
        {pokemonUserList.map((pokemon) => {
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
