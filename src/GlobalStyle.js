import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after ::before {
  box-sizing: inherit;
}

body {
  background-image: url("https://i.postimg.cc/FHbMcFLr/background.jpg");
  font-family: 'Lato', sans-serif;
   margin: 0;
  padding: 0;
   background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
}

`;