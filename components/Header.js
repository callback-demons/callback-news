import React from 'react'
import styled from 'styled-components'
import MobileMenu from './MobileMenu'

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

const Logo = styled.img``
const Right = styled.div`
  display:flex;
`
const Avatar = styled.img`
  max-width:30px;
  max-height:30px;
  background:white;
  border-radius:50%;
  margin-left:${(props) => props.theme.space * 2}px;
  border:3px solid ${(props) => props.theme.color.primary};
  box-sizing:border-box;
`

const Header = ({ title = '' }) => {
  return (
    <Container>
      <Logo src="https://storage.cloud.google.com/cbn-public/callback-news-logo-white.svg" />
      <Right>
        <MobileMenu />
        <Avatar src={`https://robohash.org/callback-${Math.floor(Math.random() * 1000)}`} />
      </Right>
    </Container>
  )
}

export default Header
