import { useState } from "react"

const BySearchPokemon = ()=>{

    const [pokemon, setPokemon] = useState(null)

    const displayPokemon = (e)=>{
        e.preventDefault()

        const displayedPokemon = e.target.pokeFinder.value 

        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + displayedPokemon )
        .then((response)=>{
           return( response.json())
        })


        
        .then((data)=>{
            setPokemon(data)
        })
    
    }

    return(
        <section>
            <h2>Pokemon finder</h2>
            <form onSubmit={displayPokemon} action="">
                <label htmlFor="">Find Pokemon by name</label>
                <input className="pokeInput" name="pokeFinder" type="text" />
                <input className="pokeInput pokeInput2" type="submit" />
            </form>

            {pokemon && (
                <article>
                    <img className="pokemonImage" src={pokemon.image} alt="" />
                    <h3>{pokemon.name}</h3>
                </article>
                    
                )}

        </section>
    )
}

export default BySearchPokemon