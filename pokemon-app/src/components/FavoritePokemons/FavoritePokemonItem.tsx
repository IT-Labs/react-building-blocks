import { Pokemon } from "../../models/pokemon";
import { Wrapper } from "./FavoritePokemonItem.style";

type Props = {
    pokemon: Pokemon,
    removePokemon: (p: Pokemon) => void
}

const FavoritePokemonItem = ({ pokemon, removePokemon }: Props) => {

    return <Wrapper>
        <img src={pokemon.img} alt={pokemon.name} />
        <span> Name:{pokemon.name} BaseExp:{pokemon.baseExp}</span>
        <button onClick={()=>{
            removePokemon(pokemon);
        }}>Remove from favorites</button>
    </Wrapper>
}


export default FavoritePokemonItem;