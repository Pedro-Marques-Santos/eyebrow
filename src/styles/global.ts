import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #494EC9;
    --blue-100: #D2D7F4;
    --gray-500: #595A5A;
    --black: #000000;
    --white: #FFFFFF;
    --box-shadow-header: #F5F5F5;
  } 
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
    button {
    cursor: pointer;
    outline: none;
	  border: none;
	  outline: inherit;
  }
  body {
    font-family: 'Poppins', sans-serif;;
  }

  .border-introduction {
    box-shadow: 4px 4px 4px 0px var(--box-shadow-header);
  }
`;
