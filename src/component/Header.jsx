const Header = ()=>{
    return(
        <header>
            <a href="http://localhost:3000/"><img className="logo-header" src="/Pokemon-removebg-preview.png" alt="" /></a>
            <nav>
                <ul>
                    <li><a href="http://localhost:3000/">100 First Pokemons</a></li>
                    <li><a href="http://localhost:3000/poke-finder">Poké Finder</a></li>
                    <li><a className="grassPokemons" href="http://localhost:3000/grass-pokemons">Grass Pokemons</a></li>
                    <li><a className="waterPokemons" href="http://localhost:3000/water-pokemons">Water Pokemons</a></li>
                    <li><a className="firePokemons" href="http://localhost:3000/fire-pokemons">Fire Pokemons</a></li>
                
                </ul>
            </nav>

        </header>
    )
}

export default Header;