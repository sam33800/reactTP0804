import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <header>
            <a href="http://localhost:3000/"><img className="logo-header" src="/Pokemon-removebg-preview.png" alt="" /></a>
            <nav>
                <ul>
                    <li><Link to = "/" >100 First Pokemons</Link></li>
                    <li><Link to = "/poke-finder">Poké Finder</Link></li>
                    <li ><Link className="grassPokemons" to = "/grass-pokemons">Grass Pokemons</Link></li>
                    <li ><Link className="waterPokemons" to = "/water-pokemons">Water Pokemons</Link></li>
                    <li ><Link className="firePokemons" to = "/fire-pokemons">Fire Pokemons</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;