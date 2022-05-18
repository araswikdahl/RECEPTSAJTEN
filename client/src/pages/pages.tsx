import React from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './RecipePage';
import Searched from "./Searched";


function pages() {
  return (
      <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Recipe" element={<RecipePage/>} />
            <Route path="/Recipe/:id" element={<RecipePage/>} />
            <Route path="/searched/:searched" element={<Searched/>} />    
        </Routes>
      </>
   
  )
}

export default pages