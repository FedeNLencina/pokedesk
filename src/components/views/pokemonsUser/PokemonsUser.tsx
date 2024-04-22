import React, { useState } from "react";
import mockList from "../../utils/mocks/pokemonUserDataMock.json";
import pikachu from "../../../assets/images/pikachu.jpg";

export default function PokemonsUser() {
  const [pokemonUserList, setPokemonUserList] = useState(mockList.list);
  const [pokemonUserListEmpty, setPokemonUserListEmpty] = useState([]);
  return (
    <div className="container">
      {pokemonUserList.length < 1 ? (
        <>
          <h1>
            Aun no ha atrapado a ningun pokemon. Vuelva a buscar en la pokedex y
            elija al menos 1 pokemon
          </h1>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
