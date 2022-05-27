import React, { ReactNode, useState } from "react";
import { Pokemon } from "../models/pokemon"

type PokemonContextType = {
    favoritePokemons: Pokemon[];
    addFavoritePokemon: (pokemon: Pokemon) => void;
    removeFromFavorite: (pokemon: Pokemon) => void;
}
export const PokemonContext = React.createContext<PokemonContextType>({ favoritePokemons: [], addFavoritePokemon: (pokemon) => { }, removeFromFavorite: (pokemon) => { } });

export const PokemonProvider: React.FunctionComponent<
    {
        favoritePokemons: Pokemon[];
        children: ReactNode
    }> = ({ favoritePokemons, children }) => {


        const [pokemons, setPokemons] = useState<Pokemon[]>(favoritePokemons);

        const addFavoritePokemon = (poke: Pokemon) => {
            setPokemons([...pokemons, poke]);
        }

        const removeFromFavorite = (poke: Pokemon) => {
            const otherPokemons = pokemons.filter(x => x.id !== poke.id);
            setPokemons([...otherPokemons]);
        }


        const result = {
            favoritePokemons: pokemons,
            addFavoritePokemon: addFavoritePokemon,
            removeFromFavorite: removeFromFavorite
        }
        return (
            <PokemonContext.Provider value={result}>
                {children}
            </PokemonContext.Provider>
        )
    };