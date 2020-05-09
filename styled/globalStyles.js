import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fontFamilyText};
    background: ${(props) => props.theme.fontFamilyText};
    color: ${(props) => props.theme.colorText};
  }
  * {
    font-family: ${(props) => props.theme.fontFamilyText};
  }
  h1,h2,h3,h4 {
    background: ${(props) => props.theme.fontFamilyTitle};
  }
`

export default globalStyles
