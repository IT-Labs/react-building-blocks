import axios from "axios"
import { Pokemon, mapToPokemon } from '../models/pokemon';

const api = 'https://pokeapi.co/api/v2/pokemon';

export const SearchPokemon = async (pokemon: string): Promise<Pokemon | undefined> => {
    try {
        let x = await axios.get(`${api}/${pokemon.toLowerCase()}`);
        if (x.data.count && x.data.count > 1) {
            return undefined;
        }
        return mapToPokemon(x.data);
    }
    catch (error) {
        return undefined;
    }
};