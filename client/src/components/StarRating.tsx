import Rating from 'react-simple-star-rating'
import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import styled from 'styled-components';
import {RecipeType} from '../types';
import { useParams } from 'react-router-dom';

const Label =styled.label`
   color:blue;
   svg{
       color:blue;
       cursor: pointer;
   }
   input{
       display:none;
   }
`
const StarContainer =styled.div`
 display:flex;
 align-items:center;
 font-size:18px;
`

const StarRating =(props:any)=> {
    const id= props.id
    const ratingprops= props.ratingprop
    console.log(id,'från ID')
    console.log(ratingprops,'från prop')

    const params = useParams()

    const [rating, setRating] = useState<any>(null);
    const [hover, setHover] = useState<any>(null);

 
    let sum = 0;
     //MAPP
    //     const functionRatings= (ratingprops:any)=>{
            
    //         ratingprops.map((rate:any) => (sum += rate));
    //         return (sum / ratingprops.length).toFixed(1);
    //       console.log("från ratingfunktion")
        
    //  }
     //FOR LOOP
    //     const functionRatings= (ratingprops:any)=>{
    //         for (let i = 0; i < ratingprops.length; i++) {
    //             return (sum += ratingprops[i])
    //           }
        
    //  }

    //REDUCE
        const functionRatings= (ratingprops:any)=>{
            console.log('i funktionen ratings')
            if(ratingprops.lenght > 0){

                 sum = ratingprops.reduce((a: number, b: number) => a + b);
            return sum / ratingprops.length;
            }else{
                return
            }
        
     }

        // functionRatings(ratingprops)
     


    const handler=(rating:number, id:string)=>{
        
        fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes/${id}/ratings`,{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                ratings: rating,
                _id: id
            })
            }).then(()=>{
                console.log(rating, 'från fetch')
        })
        };
  
    return (
        <StarContainer>{[...Array(5)].map((star,i)=>{
            const ratingValue:any = i +1;
            return  (
            <Label>
                <input 
                type="radio"
                name="rating"
                value={ratingValue}
                // onClick={()=>[setRating(ratingValue)]}
                onClick={()=>[setRating(ratingValue), handler(ratingValue,id)]}
               />
                <FaStar className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={25} 
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={()=> setHover(null)}/>
            </Label>
            );
             })}
            {/* {rating} */}
            
            {sum}
            
        </StarContainer> 
    );
  };
  export default StarRating;
  