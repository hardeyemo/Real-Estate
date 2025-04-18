import React, {createContext, useState} from 'react'

// export const ThemeContext = createContext({})
// export function ThemeContextProvider({children}){
//   const [ThemeColor, setThemeColor] = useState(() => {
//     const color = localStorage.getItem("color", JSON.stringify(ThemeColor))
//     return color ? JSON.parse(color) : null
//   })
  
//   return (
//     <ThemeContext.Provider value={{ThemeColor, setThemeColor}}>
//       {children}
//     </ThemeContext.Provider>
//   ) 
// }

export const ThemeContext = createContext();

export function ThemeContextProvider({children}){

  const [themeColor, setThemeColor] = useState('white');

  function changeBackground(color){
    setThemeColor(color)
  }

  return(
    <ThemeContext.Provider value={{changeBackground, themeColor, setThemeColor}}>
      {children}
    </ThemeContext.Provider>
  )
}

