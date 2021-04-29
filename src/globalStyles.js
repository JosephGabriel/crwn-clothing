import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}

body {
  padding: 20px 60px;
  margin: 0;
  font-family: "Open Sans Condensed", sans-serif;

  @media screen and (max-width:800px){
    padding: 10px;
  }
}

`;
