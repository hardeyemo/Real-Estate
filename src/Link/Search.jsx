import Nav from '../Rend/Nav'
import Footer from '../Rend/Footer'
import SearchMe from '../components/SearchMe'
import { useContext } from 'react';
import { ThemeContext } from '../components/Context/ThemeContext';

const Search = () => {

  const {themeColor, textColor} = useContext(ThemeContext)

  return (
    <div >
      <Nav />
      <SearchMe />
      <Footer />
    </div>
  )
}

export default Search
