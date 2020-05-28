import React from 'react'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'
import UserMenu from './UserMenu'

const Container = styled.header`
  z-index: 10;
  color: #fff;
  background: ${(props) => props.theme.gradient.primary};
  padding: 15px;
  text-align: center;
  position:fixed;
  left:0;
  right:0;
  display:grid;
  grid-template-columns:180px 120px;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`

const Logo = styled.img`
  height: 30px;
`

const Right = styled.div`
  display:flex;
`

const Header = ({ title = '' }) => {
  return (
    <Container>
      <Logo src="https://storage.cloud.google.com/cbn-public/callback-news-logo-white.svg" />
      <Right>
        <MobileMenu />
        <UserMenu />
      </Right>
    </Container>
  )
}

export default Header
