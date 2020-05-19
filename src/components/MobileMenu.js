import React, { useState } from 'react'
import styled from 'styled-components'
import HamburgerButton from './Hamburger'

const HamburgerWrapper = styled.div`
  width: calc(100% - 25px);
  position:relative;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: right;
  margin: 0;
  z-index:12;
  @media  screen and (min-width: 720px) {
    display:none;
  }
`

const Menu = styled.nav`
  display:${(props) => (props.isActive ? 'block' : 'none')};
  position:fixed;
  background:${(props) => props.theme.colorPrimary};
  z-index:3;
  font-size:2em;
  right: ${(props) => (props.isActive ? '0%' : '-100%')};
  top:0;
  bottom:0;
  left:0;
  transition: all 5s ease-in-out;
`

const MenuList = styled.ul`
  display:grid;
  align-content: space-evenly;
  height: 100vh;
`

const MenuElement = styled.li`
  list-style-type:none;
`

export default function MobileMenu() {
  const [isActive, setIsActive] = useState(false)
  const handleHamburgerClick = (event) => {
    event.preventDefault()
    setIsActive(!isActive)
  }

  return (
    <>
      <HamburgerWrapper>
        <HamburgerButton onClick={handleHamburgerClick} isActive={isActive} color="white" />
      </HamburgerWrapper>
      <Menu isActive={isActive}>
        <MenuList>
          <MenuElement>Programación</MenuElement>
          <MenuElement>Inteligencia Artificial</MenuElement>
          <MenuElement>User Experience</MenuElement>
          <MenuElement>Internet</MenuElement>
          <MenuElement>Robótica</MenuElement>
          <MenuElement>Gamer</MenuElement>
          <MenuElement>Sistemas</MenuElement>
          <MenuElement>Devops</MenuElement>
        </MenuList>
      </Menu>
    </>
  )
}

