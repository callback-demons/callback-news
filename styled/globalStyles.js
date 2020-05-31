import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size:18px;
    color: ${(props) => props.theme.colorText};
    background: ${(props) => props.theme.background};
    font-family: ${(props) => props.theme.fontFamilyText};
  }
  button {
    font-family: ${(props) => props.theme.fontFamilyText};
  }
  h1,h2,h3,h4 {
    font-family: ${(props) => props.theme.fontFamilyTitle};
  }
  h1 {
    padding-top:${(props) => props.theme.space * 2}px;
  }
  h2 {
    padding-top:${(props) => props.theme.space * 2}px;
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
      cursor: pointer;
      text-decoration:underline;
      color:${(props) => props.theme.color.secondary};
    }
  }
  p {
    & img {
    display:block;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.primaryLight};
    border-radius: 10px;
    border: 0px none #ffffff;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.skeleton.baseColorDark};
    border-radius: 10px;
    border: 0px none #ffffff;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  }
`

export default globalStyles
