import { useState } from "react"
import PokemonCard from "./PokemonCard"


const FirePokemons = ()=>{

    const [pokemons, setPokemons] = useState(null)

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
            {pokemons ? (
            <>
            {pokemons.map((pokemon)=>{
            return(
                <PokemonCard  pokemon = {pokemon}/>
               
            )
        })}
            </>
        ): <img className="spinner" src="/32eb230b326ee3c76e64f619a06f6ebb.png" alt="" />

        
    }

        </section>
    )
}

export default FirePokemons