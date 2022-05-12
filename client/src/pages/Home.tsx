import React from 'react'
import styled from 'styled-components';
import Search from '../components/search';
import FetchRecipes from '../components/FetchRecipes'

const Header = styled.header`
   width:100%;
   height: 650px;
   display:flex;
   justify-content:center;
   align-items:center;
   text-align:center;
   img{
       width:100%;
       height:100%;
       background-size: cover;
       object-fit:cover;
       filter: brightness(70%);
       position:relative;
       z-index:2;

   }
   h1{
       font-family:kaushan script;
       position:absolute;
       color:white;
       z-index:5;
       font-size:68px;
   }
   p{

       position:absolute;
       color:white;
       z-index:5;
       font-size:20px;
       width:60%;
       margin-top:15rem;

   }

    `;
    const Nav = styled.nav`
        display:flex;
    justify-content:center;
    align-items:center;
  
    position: fixed;
    top: 0;
    z-index: 1000;
    height:5rem;
    background-color:white;
    width:100%;
    padding:1rem;
    color:#173825;
    p{
        font-size:20px;
        font-weight: 700;
    }
    div{
        margin:auto;
        display:flex;
    justify-content:space-around;
    align-items:center;
        width:90%;
        img{
            width:3rem;
        }
    }
    `
    const Footer = styled.footer`
    height:20rem;
    width:100%;
    padding:1rem;
    background-color:#173825;
   
    `

function Home() {
  return (<>
           <Nav>
               <div>
                    <p>Mina recept</p>
                    <p>Om oss</p>
                    <img src={require('../Vector.png')} alt="" />
                    <p>Inspiration</p>
                    <p>Vanliga frågor</p>
               </div>
         </Nav>
     <Header>
         <Search/>

         <h1>VEGETARISKA RECEPT</h1>
         <p>En kort text om vegetarsisk mat eller nått. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta! </p>
       {/* <img src="https://s1.1zoom.me/b5050/144/Vegetables_Fruit_Fish_Food_Pepper_Citrus_Nuts_562218_3840x2400.jpg" alt=""/> */}
       <img src="https://static.vecteezy.com/ti/gratis-foton/p2/2248291-halsosam-mat-gronsaker-och-frukter-pa-en-svart-betong-bakgrund-gratis-fotona.jpg" alt=""/>
      
     </Header>
     <FetchRecipes/>

     <Footer/>
  </>


  )
}

export default Home