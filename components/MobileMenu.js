import React, { useState } from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger'

const HamburgerWrapper = styled.div`
  z-index:12;
  display: grid;
  grid-gap: 20px;
  position:relative;
  align-items: center;
  justify-items: right;
  width: calc(100% - 25px);
  margin: 0px 6px 0px -6px;
  @media  screen and (min-width: 720px) {
    /* If isActive should display the menu to close It */
    ${(props) => !props.isActive && 'display:none;'}
  }
  ${(props) => props.isActive && 'display:block;'}
`

const Menu = styled.nav`
  display:${(props) => (props.isActive ? 'block' : 'none')};
  position:fixed;
  background:${(props) => props.theme.color.primary};
  z-index:11;
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
  padding: 0;
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
      <HamburgerWrapper isActive={isActive}>
        <Hamburger
          onClick={handleHamburgerClick}
          isActive={isActive}
          color="white"
        />
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

