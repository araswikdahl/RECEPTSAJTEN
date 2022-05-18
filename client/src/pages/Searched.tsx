import React from 'react';
import {useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import styled from 'styled-components';
import {RecipeType} from '../types';
import { NavLink} from 'react-router-dom';




const Searched=()=> {

        const {searched}=useParams()

        console.log(searched)

        const [ searchedRecipe, setSearchedRecipe] = useState<RecipeType[]>([]);
      
        useEffect (()=>{
          const loadSearched = async ()=>{
            const res = await fetch (`http://localhost:4000/recipe/search/${searched}`)
            .then(data => data.json());
            console.log(res,res.data)
            setSearchedRecipe(res);
          }
          
          loadSearched();
      
        }, [])

  return (
      <>
       {/* {searchedRecipe.map((recipe)=> { */}
                {/* return( */}
                    {/* <NavLink to ={`/Recipe/${recipe._id}`}> */}
                         {/* <Card key={recipe._id}> */}
                        {/* <img src={recipe.imageUrl} width={200} alt=""/>  */}
                        {/* <div> */}
                            {/* <p>{recipe.title}</p> */}
                            {/* <p>{recipe.timeInMins}min</p> */}
                        {/* </div>        */}
                    {/* </Card> */}
                        {/* </NavLink> */}
                   
                );
            {/* })} */}

        <h1>searched</h1>
      </>
   
  )
  }

export default Searched