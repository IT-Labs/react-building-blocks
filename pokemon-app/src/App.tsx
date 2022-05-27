import FavoritePokemons from "./components/FavoritePokemons/FavoritePokemons";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";

function App() {

  return (
    <>
      <h1>Hi Pokemon!</h1>
      <h4>Pokemon names if you can think of them: Pikachu,
Charizard,
Gengar,
Arcanine,
Bulbasaur,
Eevee,
Dragonite,
Squirtle,
Ninetales</h4>
      <FavoritePokemons />
      <SearchPokemon />
    </>
  );
}

export default App;
