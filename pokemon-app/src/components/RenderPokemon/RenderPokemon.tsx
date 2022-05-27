import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { Pokemon } from "../../models/pokemon";
import { Wrapper } from "./RenderPokemon.style";

type RenderPokemonProps = {
    pokemon?: Pokemon
}

const RenderPokemon = ({ pokemon }: RenderPokemonProps) => {
    const { favoritePokemons, addFavoritePokemon } = useContext(PokemonContext);
    const isFav = favoritePokemons?.find((x) => {
        return x.id === pokemon?.id;
    })
    return (
        <>
            {!pokemon && <h3>No results found!</h3>}
            {pokemon &&
                <Wrapper>
                    <h3>We found {pokemon.name}!</h3>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <p>
                        <span>Height:<strong>{pokemon.height}</strong> &nbsp;</span>
                        <span>Weight:<strong>{pokemon.weight}</strong>&nbsp;</span>
                        <span>Base experience:<strong>{pokemon.baseExp}</strong>&nbsp;</span>
                    </p>
                    {!isFav && <button onClick={() => {
                        addFavoritePokemon(pokemon)

                    }}>Add as favorite!</button>
                    }
                </Wrapper>}
        </>
    )
}
export default RenderPokemon;