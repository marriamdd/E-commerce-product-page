import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 62.5%;
}
body{
    font-family: "Kumbh Sans", sans-serif ;
    background: #FFF;

  
}
li{
    list-style: none;
}
button{
    font-family: "Kumbh Sans", sans-serif ;   
}
`;
