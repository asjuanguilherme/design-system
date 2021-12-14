import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
   }

   #_next {
      overflow: hidden;
   }     
`