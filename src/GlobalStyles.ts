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
  background-color: ${(props) => props.theme.primary};
  font-family: "Karla", sans-serif;
  font-weight: 500;
}
`;

export default GlobalStyles;
