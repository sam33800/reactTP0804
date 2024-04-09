import { useEffect, useState } from "react"

const AllTypes = ()=>{
   
   const [types, setTypes] = useState([])

   useEffect(()=>{
    fetch("https://pokebuildapi.fr/api/v1/types")
    .then((response)=>{
     return(response.json())
    })
    .then((data)=>{
     return(setTypes(data))
    })

 
   },[])

   
   
   
    return(
        <section id="allTypes">
            <h2>Types list</h2>
            {types.map((type)=>{
                return(
                    <article>
                        <p>{type.name}</p>
                    </article>
                )

            })}
        </section>
    )
}

export default AllTypes