import Header from './Header';
import './App.css';
import FirstPokemons from './FirstPokemons';
import AllTypes from './AllTypes';
import WaterPokemons from './WaterPokemons';
import FirePokemons from './FirePokemons';
import GrassPokemons from './GrassPokemons';
import RandomTeam from './RandomTeam';
import BySearchPokemon from './BySearchPokemon';
import PokemonByResistance from './PokemonByResistance';

function App() {
  return (
 <>
<Header />
<container>
  <PokemonByResistance />
  {/* <BySearchPokemon /> */}
  {/* <AllTypes /> */}
  {/* <FirstPokemons /> */}
  {/* <WaterPokemons /> */}
  {/* <FirePokemons /> */}
  {/* <GrassPokemons /> */}
  {/* <RandomTeam /> */}
</container>





 </>
  );
}

export default App;
