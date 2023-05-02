import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #494EC9;
    --blue-100: #D2D7F4;
    --blue-500: #3F9BFC;
    --gray-500: #595A5A;
    --gray-100: #eaecf0;
    --green-100: #12B76A1A;
    --black: #000000;
    --white: #FFFFFF;
    --box-shadow-header: #F5F5F5;
    --yellow: #928c04;
    --yellow-100: #f4f3d2;
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
