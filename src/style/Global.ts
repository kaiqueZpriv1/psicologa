import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #e9ecef;
    }
    h1,h3{
        font-family: 'Open Sans', sans-serif;
    }
    p, button, span{
        font-family: 'Roboto Condensed', sans-serif;
    }
`;
