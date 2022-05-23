import styled from 'styled-components';

      const FooterStyle = styled.footer`
      height:6rem;
      width:100%;
      /* padding:1rem; */
      background-color:#173825;
      color:white;
       display:flex;
      justify-content:center;
      align-items:center; 
    
      
      `


const Footer = () =>{

    return<>
    <FooterStyle>
        <p>© Copyright 2022 Vego. All Rights Reserved.</p>
    </FooterStyle>  
         </>
    
}

export default Footer;