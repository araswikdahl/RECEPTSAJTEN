import React from 'react';
import styled from 'styled-components';
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';
import Categories from '../components/Categories';
import {useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import {RecipeType} from '../types';
import { NavLink} from 'react-router-dom';
import StarRating from '../components/StarRating';
import Footer from '../components/Footer';

    const Main = styled.main`
    display:flex;
    flex-direction:column;
    background-color:#F9F8F1;
    color:#173825;
    padding:1rem;
        h3{
            font-size:35px;
            margin:auto;
            padding-top:3rem; 
        }
    `;

    const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center; 
    `;

    const Card = styled.div`
    margin: 1rem;
    background-color:white;
    color:#173825;
    font-size:23px;
    width: 24.5rem;
    height: 32rem;
    box-sizing:border-box;
    box-shadow: 0 2px 3px 0 rgb(0 0 0 / 23%);
        img{
        width: 100%;
        height: 70%;
        object-fit:cover;
        }
        section{
            padding:1.5rem;
            height:25%;
            display: flex;
            flex-direction:column;
            justify-content:space-between;
        }
        :hover{
            opacity: 0.7;
        }
    `; 

    const Wrapper = styled.div`
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    background-color:#F9F8F1;
    max-width:100%;
        a{
            text-decoration:none;
        }
    `;

const CategoryPage=()=> {

    const {categories}=useParams()

    // console.log(categories)

    const [ categoryRecipe, setCategoryRecipe] = useState<RecipeType[]>([]);
  
    useEffect (()=>{
      const loadCategoryRecipe = async ()=>{
        const res = await fetch (`${process.env.REACT_APP_API_BASE_URL}/category/${categories}/recipes`)
        .then(data => data.json());
        // console.log(res,res.data)
        console.log(categories)
        // console.log(categoryRecipe)
        setCategoryRecipe(res);
      }
      
      loadCategoryRecipe();
  
    }, [categories])

  return (
      <>
       <NavHeader/>
       <MainHeader/>
       <Main>
       <Categories/>
            <Wrapper>
                {categoryRecipe.map((recipe)=> {
                return(
                    <NavLink to ={`/Recipe/${recipe._id}`}>
                         <Card key={recipe._id}>
                            <img src={recipe.imageUrl} width={200} alt=""/> 
                            <section>
                                <Container>
                                    <StarRating/> 
                                    <p>{recipe.timeInMins}min</p>
                                </Container>      
                                <p>{recipe.title}</p>
                            </section>       
                        </Card>
                    </NavLink>    
                 );
                 })}
            </Wrapper>
      </Main>
      <Footer/>
       
      </>
   
  )
}

export default CategoryPage