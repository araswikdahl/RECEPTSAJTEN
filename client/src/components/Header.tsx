import styled from 'styled-components';
import Search from '../components/search';

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
       font-size:80px;
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
    


const MainHeader = () =>{

    return<>
        <Header>
            <Search/>
             <h1>VEGETARISKA RECEPT</h1>
             {/* <p>En kort text om vegetarsisk mat eller nått. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta! </p> */}
             <p>Här hittar du alla våra fräscha vegetariska recept. Smaklig måltid! </p>
             <img src="https://static.vecteezy.com/ti/gratis-foton/p2/2248291-halsosam-mat-gronsaker-och-frukter-pa-en-svart-betong-bakgrund-gratis-fotona.jpg" alt=""/>  
        </Header>
        
      </>    
}

export default MainHeader;