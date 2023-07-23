import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
} 
h1, h2, h3, h4, h5, h6{
  display: inline-block;
}
body{
  overflow-x: hidden;
  font-family: "Source Sans Pro", sans-serif;
}
`;

export default GlobalStyles;
