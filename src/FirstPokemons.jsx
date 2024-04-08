import { useState } from "react"
import PokemonCard from "./PokemonCard"

const FirstPokemons = ()=>{

    const [pokemons, setPokemons] = useState([])

    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response)=>{
        return(response.json())
    })
    .then((data)=>{
        setPokemons(data)
    })


    return(
        <section id="firstPokemons">
            <h2>100 First Pokemons</h2>
        {pokemons.map((pokemon)=>{
            return(
                <PokemonCard  pokemon = {pokemon}/>
               
            )
        })}

        

    </section>
    )

}


export default FirstPokemons