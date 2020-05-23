import React from 'react'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'
import Avatar from './Avatar'

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
`

const Logo = styled.img``
const Right = styled.div`
  display:flex;
`

const CustomAvatar = styled(Avatar)`
  margin: 0px;
  margin-left: 16px;
`

const Header = ({ title = '' }) => {
  return (
    <Container>
      <Logo src="https://storage.cloud.google.com/cbn-public/callback-news-logo-white.svg" />
      <Right>
        <MobileMenu />
        <CustomAvatar size="30px" withBorder src={`https://robohash.org/callback-${Math.floor(Math.random() * 1000)}`} />
      </Right>
    </Container>
  )
}

export default Header
