const Header = ()=>{
    return(
        <header>
            <a href="http://localhost:3000/"><img className="logo-header" src="/Pokemon-removebg-preview.png" alt="" /></a>
            <nav>
                <ul>
                    <li><a href="#firstPokemons">100 First Pokemons</a></li>
                    <li><a href="#allTypes">Types list</a></li>
                    <li><a className="grassPokemons" href="#grassPokemons">Grass Pokemons</a></li>
                    <li><a className="waterPokemons" href="#waterPokemons">Water Pokemons</a></li>
                    <li><a className="firePokemons" href="#firePokemons">Fire Pokemons</a></li>
                
                </ul>
            </nav>

        </header>
    )
}

export default Header;