import { useState } from "react"
import PokemonCard from "./PokemonCard"


const WaterPokemons = ()=>{

    const [pokemons, setPokemons] = useState([])

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Eau")
    .then((response)=>{
        return(response.json())
    })
    .then((data)=>{
        return(setPokemons(data))
    })


    return(
        <section id="waterPokemons">
            <h2>Water Pokemons</h2>
            {pokemons.map((pokemon)=>{
            return(
                <PokemonCard  pokemon = {pokemon}/>
               
            )
        })}

    </section>
    )
}

export default WaterPokemons