import { useState } from "react"
import PokemonCard from "./PokemonCard"

const PokemonByResistance = ()=>{

    const [types, setTypes] = useState([])
    const [value, setValue] = useState("")

   

    const selectType = (e)=>{
        e.preventDefault()
        setValue(e.target.typeName.value)
    }


    fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/resistance/${value}`)
    .then((response)=>{
        return(
            response.json()
        )
    })
    .then((data)=>{
        return(
            setTypes(data)
            
        )
    
    })
    

    return (
        <section>
            
                <form onSubmit={selectType} action="">
                    <select className="selectInput" name="typeName" id="">
                        <option value="Eau">Eau</option>
                        <option value="Feu">Feu</option>
                        <option value="Plante">Plante</option>
                    </select>
                    <input type="submit" />
                </form>
                <article>
                    
                    
                    
                    
                    {types.map((type)=>{
                        return(
                            <PokemonCard pokemon = {type} /> 
                        )
                    })}
                </article>
            
            


        </section>
    )
}

export default PokemonByResistance