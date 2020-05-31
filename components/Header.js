/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import UserMenu from './UserMenu'
import useUserContext from '../hooks/useUserContext'

const Container = styled.header`
  z-index: 9;
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
  z-index: 9;
  @media screen and (min-width: 768px) {
    grid-template-columns:180px auto;
  }
`

const Logo = styled.img`
  height: 30px;
`

const Right = styled.div`
  display:flex;
`

const Header = ({ title = '' }) => {
  const [user, setUser] = useUserContext()
  useEffect(() => {
    console.log()
    setUser({
      ...user,
      email: window.localStorage.getItem('email'),
    })
  }, [null])

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo src="https://storage.googleapis.com/cbn-public/callback-news-logo-white-2.svg" />
        </a>
      </Link>
      <Right>
        <UserMenu username={user.email} />
        <MobileMenu />
      </Right>
    </Container>
  )
}

export default Header
