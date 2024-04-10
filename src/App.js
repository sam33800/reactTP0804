import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import PageWaterPokemons from './page/PageWaterPokemons';
import PageFirePokemons from './page/PageFirePokemons';
import PageGrassPokemons from './page/PageGrassPokemons';
import PagePokeFinder from './page/PagePokeFinder';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/water-pokemons" element= {<PageWaterPokemons/>} />
      <Route path="/fire-pokemons" element= {<PageFirePokemons/>} />
      <Route path="/grass-pokemons" element= {<PageGrassPokemons/>} />
      <Route path="/poke-finder" element= {<PagePokeFinder/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
