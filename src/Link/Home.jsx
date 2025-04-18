import Nav from "../Rend/Nav"
import Hero from "../components/Hero"
import Section from "../components/Section"
import Pagination from "../components/Pagination"
import Footer from "../Rend/Footer"
import { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';

const Home = () => {
  const { themeColor, textColor } = useContext(ThemeContext)
  return (

    <div style={{ backgroundColor: themeColor, color: textColor }}>
      <Nav />
      <Hero />
      <Section />
      <Pagination />
      <Footer />
    </div>
  )
}

export default Home
