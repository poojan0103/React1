import axios from 'axios'
import React, { useState } from 'react'

export const RecipeAPi =() => {

    const [recipe, setrecipe] = useState()
    const getRecipe = async ()=>{

        await axios.get("https://recipesapi2.p.rapidapi.com/recipes/baked%20macroni",{
            params:{
                maxRecipes:2

            },
            headers:{
                "X-RapidAPI-Key":"2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6",
                "X-RapidAPI-Host":"recipesapi2.p.rapidapi.com"
            }           
        }).then(res=>{
            console.log(res.data.data)
            setrecipe(res.data.data)
            setTimeout(()=>{
                fetchData()
            },4500)
            
        })
    }


    
    console.log(recipe)
    
    const fetchData = async () =>{

        await console.log(recipe[0].name)
        for(var i=0;i<recipe[0].ingredients.length;i++){
            console.log(recipe[0].ingredients[i])
        }
        
    }
  return (
    <div>
        <button onClick={getRecipe}>Get Recipe</button>
    </div>
  )
}