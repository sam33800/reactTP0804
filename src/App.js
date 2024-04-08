import Header from './Header';
import './App.css';
import FirstPokemons from './FirstPokemons';
import AllTypes from './AllTypes';
import WaterPokemons from './WaterPokemons';
import FirePokemons from './FirePokemons';
import GrassPokemons from './GrassPokemons';

function App() {
  return (
 <>
<Header />
<container>
  {/* <AllTypes /> */}
  <FirstPokemons />
  <WaterPokemons />
  <FirePokemons />
  <GrassPokemons />
</container>

 </>
  );
}

export default App;
