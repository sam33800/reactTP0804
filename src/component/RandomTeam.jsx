import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"

const RandomTeam = ()=>{

    const [pokemons, setPokemons] = useState(null)


    useEffect(()=>{
        fetch("https://pokebuildapi.fr/api/v1/random/team")
    .then((response)=>{
        return(response.json())
    })
    .then((data)=>{
        setPokemons(data)
    })
    },[])

    


    return(
        <section>
            <h2>Random Team</h2>
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


export default RandomTeam