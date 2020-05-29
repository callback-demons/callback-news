import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  z-index: 10;
  color: #fff;
  background: ${(props) => props.theme.gradient.primary};
  padding: 15px;
  text-align: center;
  width:100%;
  z-index: 10;
`

const Footer = () => {
  return (
    <Container>
      Copyright © 2020. All rights reserved to the author of every news.
    </Container>
  )
}

export default Footer
