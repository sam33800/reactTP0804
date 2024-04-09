import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"

const BySearchPokemon = ()=>{

    const [pokemon, setPokemon] = useState([])
    const [foundPokemon, setFoundPokemon] =useState("Gruikui")

    useEffect(()=>{
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${foundPokemon}`)
    .then((response)=>{
        return(response.json())
    })
    .then((data)=>{
        (setPokemon(data))
    })
    },[foundPokemon])

    const pokeInput = document.querySelector("pokeFinder")

    const pokeEvent = (e)=>{
        e.preventDefault() 
        const inputValue = e.target.pokeFinder.value   
        setFoundPokemon(inputValue)

    }
    



    return(
      <section>

       
           
                        <form onSubmit={pokeEvent}  className="pokeForm" action="">
            <label htmlFor="">Find a pokemon by name</label>
            <input  name="pokeFinder" className="finder" type="text" />
            <input  type="submit" />

            </form>

        

            <article>
                <img className="pokemonImage" src={pokemon.image} alt="" />
                    <h3>{pokemon.name}</h3>



            </article>

       
        
       

       
      </section>
            
        
    )
}

export default BySearchPokemon