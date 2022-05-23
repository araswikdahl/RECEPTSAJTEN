import React from 'react'
import styled from 'styled-components';
import Search from '../components/search';
import FetchRecipes from '../components/FetchRecipes'
import NavHeader from '../components/NavHeader';
import MainHeader from '../components/Header';
import Footer from '../components/Footer';



function Home() {
  return (<>
    <NavHeader/>
    <MainHeader/>
    <FetchRecipes/>
    <Footer/>
  </>
  )
}

export default Home