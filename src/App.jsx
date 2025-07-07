
import Home from './Link/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categ from './Link/Categ';
import March from './Link/March';
import Login from "./Link/Login";
import Register from "./Link/Register";
import Search from "./Link/Search"
import Profile from './Link/Profile';
import Forget from "./Link/Forget";
import {ThemeContextProvider} from "./components/Context/ThemeContext"
import Dashboard from "./Link/Dashboard"
 
function App() {
  return ( 
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
               <Route path="/categ" element={<Categ/>}/>
               <Route path="/march" element={<March/>}/>
               <Route path="/search" element={ <Search/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/forget" element={<Forget/>}/>
               <Route path="/profile" element={<Profile/>}/>
               <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
                    
  );
}
 
export default App;