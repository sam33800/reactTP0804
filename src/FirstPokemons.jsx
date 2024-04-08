import { useState } from "react"
import PokemonCard from "./PokemonCard"

const FirstPokemons = ()=>{

    const [pokemons, setPokemons] = useState(null)

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


export default FirstPokemons