import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {RecipeType} from '../types';

const CategoryWrapper = styled.div` 
    display:flex;
    margin:2rem auto 5rem auto;
    ul{
        list-style-type: none;
        color:black;
    }
    a{
        text-decoration:none;  
        }   
    p{
        padding:1.3rem;
        font-size:24px;
    }
    `;

    const LiStyle=styled.li`
    text-transform: uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color: #173825;
    color: #fff;
    border-radius: 16px;
    padding:0.5rem 1.5rem;
    cursor: pointer;
    box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 6%);
        span{
            padding-left:0.4rem;
        }
        :hover{
            background-color:#173825ae;
        }
    `


const Categories = () =>{
    const [ categories, setCategory] = useState<RecipeType[]>([]);
  
    useEffect (()=>{
      const loadCategory = async ()=>{
        const res = await fetch (`${process.env.REACT_APP_API_BASE_URL}/category`)
        .then(data => data.json());
        console.log(res,res.data)
        setCategory(res);
      }
      
      loadCategory();
  
    }, [])



    return<>

        <h3>KATEGORIER</h3>
       
        <CategoryWrapper>
              {categories.map((category:any)=> {
              const Li=(
                    <NavLink to ={`/category/${category._id}`}>  
                        <ul key={category}>
                             <LiStyle>{category._id}<span>({category.count})</span> </LiStyle>           
                        </ul>      
                    </NavLink>    
                );return Li;
                 })}
        </CategoryWrapper>   
 </>}

export default Categories;