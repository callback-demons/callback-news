import React from 'react'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'

const Container = styled.header`
  color: #fff;
  background: ${(props) => props.theme.gradient};
  padding: 15px;
  text-align: center;
  position:fixed;
  left:0;
  right:0;
`

const Header = ({ title = '' }) => {
  return (
    <Container>
      {title}
      <MobileMenu />
    </Container>
  )
}

export default Header
