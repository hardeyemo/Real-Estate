import React from 'react'
import Nav from '../Rend/Nav'
import Hero from '../components/Hero'
import Footer from '../Rend/Footer'
import States from "../components/States"
import Features from '../components/Features'
import Filtering from '../components/Filtering'
import { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';

const Categ = () => {

  const {themeColor, textColor} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: themeColor, color: textColor}}>
      <Nav />
      <Hero />
       <States />
       <Features />
       <Filtering />
      <Footer />
    </div>
  )
}

export default Categ
