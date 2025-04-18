import React from 'react'
import Nav from '../Rend/Nav'
import Footer from '../Rend/Footer'
import Nomatch from '../components/Nomatch'
import { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';

const March = () => {

  const {themeColor, textColor} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: themeColor, color: textColor}}>
      <Nav />
      <Nomatch />
      <Footer />
    </div>
  )
}

export default March
