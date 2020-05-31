import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  z-index: 8;
  color: #fff;
  background: ${(props) => props.theme.gradient.primary};
  padding: 15px;
  text-align: center;
  width:100%;
  bottom: 0;
  position: relative;
  box-sizing: border-box;
  font-size: .8em;
  @media screen and (min-width:720px) {
    font-size:1em;
  }
}
`

const Footer = () => {
  return (
    <Container>
      Copyright © 2020. All rights reserved to the author of every news.
    </Container>
  )
}

export default Footer
