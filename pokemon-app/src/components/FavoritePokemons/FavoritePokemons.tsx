import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonContext";
import FavoritePokemonItem from "./FavoritePokemonItem";

const FavoritePokemons = () => {
    const { favoritePokemons, removeFromFavorite } = useContext(PokemonContext);
    return (
        <div>
            <h3>Favorite Pokemons: </h3>
            <Wrapper>
                {favoritePokemons.map(x => { return <FavoritePokemonItem pokemon={x} removePokemon={removeFromFavorite} /> })}
            </Wrapper>
        </div>)
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
`
export default FavoritePokemons;