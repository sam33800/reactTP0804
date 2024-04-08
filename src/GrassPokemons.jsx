import { useState } from "react"
import PokemonCard from "./PokemonCard"



const GrassPokemons = ()=>{

    const [pokemons, setPokemons] = useState([])

    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/Plante")
    .then((response)=>{
        return(response.json())
    })
    .then((data)=>{
        return(setPokemons(data))
    })


    return(
        <section id="grassPokemons">
            <h2>Grass pokemons</h2>
            {pokemons.map((pokemon)=>{
            return(
                <PokemonCard  pokemon = {pokemon}/>
               
            )
        })}
        </section>
    )
}

export default GrassPokemons