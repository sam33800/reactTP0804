import { useState } from "react"
import PokemonCard from "./PokemonCard"


const FirePokemons = ()=>{

    const [pokemons, setPokemons] = useState([])

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Feu")
    .then((response)=>{
        return(response.json())
    })
    .then((data)=>{
        return(setPokemons(data))
    })


    return(
        <section id="firePokemons">
            <h2>Fire pokemons</h2>
            {pokemons.map((pokemon)=>{
            return(
                <PokemonCard  pokemon = {pokemon}/>
               
            )
        })}
        </section>
    )
}

export default FirePokemons