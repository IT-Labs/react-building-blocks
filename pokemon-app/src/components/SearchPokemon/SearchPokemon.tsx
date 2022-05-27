import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { PokemonContext } from "../../contexts/PokemonContext";
import { Pokemon } from '../../models/pokemon';
import * as PokemonService from "../../services/pokemon-service"
import RenderPokemon from "../RenderPokemon/RenderPokemon";

const SearchPokemon = () => {
    const [searchText, setSearch] = useState('');
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
    const inputRef = useRef<HTMLInputElement>(null);
    const { favoritePokemons, removeFromFavorite } = useContext(PokemonContext);

    return (
        <>
            <Wrapper>
                <span>Search pokemon:</span>
                <input ref={inputRef} value={searchText} type='text' onChange={(e) => setSearch(e.currentTarget.value)} />
                <button onClick={async () => {
                    const pokemonResult = await PokemonService.SearchPokemon(searchText);
                    setPokemon(pokemonResult);
                    inputRef.current?.focus();
                    console.log(pokemonResult);
                }}>Search</button>
            </Wrapper>
            <span>Shared context example:
                {favoritePokemons.map(x =>
                    <PokemonNameSpan>
                        {x.name}
                        <label onClick={() => removeFromFavorite(x)}>X</label>
                    </PokemonNameSpan>)}
            </span>
            <RenderPokemon pokemon={pokemon} />
        </>
    )
}

const PokemonNameSpan = styled.span`
    font-weight: 400;
    margin:1em;
    padding:5px;
    border: 1px dotted gray;
    label{
        padding: 5px;
        cursor: pointer;
        font-weight: 500;
    }
`
const Wrapper = styled.div`
    border:1px solid black;
    border-radius: 0.5em;
    padding: 1em;
    margin: 1em;
`

export default SearchPokemon;