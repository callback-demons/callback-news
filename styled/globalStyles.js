import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fontFamilyText};
    background: ${(props) => props.theme.fontFamilyText};
    color: ${(props) => props.theme.colorText};
    font-size:18px;
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
  img {
    max-width:100%;
  }
  blockquote {
    position: relative;
    /* padding-left: 30px; */
    font-weight: 900;
    color: ${(props) => props.theme.color.primary};
    padding: ${(props) => props.theme.space}px;
    margin: ${(props) => props.theme.space}px;
    margin-left: 30px;
    /* max-width: 33em; */
    font-size: 1.2em;
    &:before {
      content: "“";
      position: absolute;
      right: 100%;
      font-size: 60px;
      line-height: 0px;
      top: 50px;
      color: ${(props) => props.theme.color.secondary};
    }
  }
  a {
    color:${(props) => props.theme.color.secondary};
    text-decoration:none;
    &:hover {
      color:${(props) => props.theme.color.secondaryLight};
      font-weight:bold;
    }
  }
  p {
    & img {
    display:block;
  }
  }

`

export default globalStyles
