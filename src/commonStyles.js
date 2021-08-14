import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
export const AppStyles = createGlobalStyle`
body {
    display: flex;
    flex-direction: column;
    background:rgba(0,204,255,0.1);
   
    font-family: 'Roboto', sans-serif;
    color: blue;
}

body>div {
    display: flex;
    flex-direction: column;
    height: 100%;
}

header, footer {
    background-color: rgb(56, 199, 235); 
    color: white;
    font-size: medium;
    font-weight: bold;
    
}

main {
    overflow-y: auto;
    flex: auto;
}

.max-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}

`;
 
export const AppContainer = styled.div`
  background-color:black;
  height:fit-content;
`;