import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /** 
        All font styling later should be wrapped under
        body selector. For example, font-family, font-size,
        font-weight, etc.
        See example below
    */
    body {
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;
