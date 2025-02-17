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
  resize: both;
  overflow: auto;
  font-family: 'Lato', sans-serif;
  background-size: cover;
  margin: 20px;
  padding: 40px;
}

`;