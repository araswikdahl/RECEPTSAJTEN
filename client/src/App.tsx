import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {useState, useEffect} from 'react'
// import {RecipeType} from './types'
import Search from './components/search'
// import FetchRecipes from './components/FetchRecipes'
// import Home from './pages/Home'
import Pages from './pages/pages'
import { BrowserRouter} from 'react-router-dom';


const App =()=> {
console.log("hej",process.env.REACT_APP_API_BASE_URL);
  return(<>
   <BrowserRouter> 
  <Pages/>
  </BrowserRouter> 
  {/* <FetchRecipes/> */}
  </>)
  }

export default App;
