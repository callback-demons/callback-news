import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fontFamilyText};
    background: ${(props) => props.theme.fontFamilyText};
    color: ${(props) => props.theme.colorText};
  }
  button {
    font-family: ${(props) => props.theme.fontFamilyText};
  }
  h1,h2,h3,h4 {
    font-family: ${(props) => props.theme.fontFamilyTitle};
  }
  * {
    /* border:1px solid hotpink; */
  }
`

export default globalStyles
