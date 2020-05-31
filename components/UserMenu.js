import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Avatar from './Avatar'
import Modal from './Modal'
import useToggle from '../hooks/useToggle'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { bigBoxShadow } from '../styled/mixins'

const UserMenuContainer = styled.div`
  margin: 0px;
  @media screen and (min-width: 768px) {
    margin: 0px 16px;
  }
`

const MenuContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`

const CustomAvatar = styled(Avatar)`
  margin: 0px;
`

const UserName = styled.p`
  color:white;
  display:none;
  margin: 0px 6px;
  @media screen and (min-width: 768px) {
    float:right;
    display:block;
  }
`

const LoginButtonContainer = styled.div`
  width: 100%;
`

const LoginButton = styled.p`
  color: white;
  margin: 0px 12px;
  position: relative;
  &:before{
    left: 0;
    bottom: 0;
    height: 2px;
    content: "";
    width: 100%;
    position: absolute;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }
  &:hover:before{
    visibility: visible;
    transform: scaleX(1);
  }
`

const DropdownList = styled.ul`
  ${bigBoxShadow}
  right: 0;
  margin: 0px;
  display: none;
  list-style: none;
  text-align: right;
  position: absolute;
  border-radius: 8px;
  padding-right: 16px;
  background-color: white;
  ${UserMenuContainer}:hover &, &:hover&:hover{
    display: block;
  }
`

const ListItem = styled.li`
  margin: 10px 0px;
`

const ItemLink = styled.a`
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
  &:hover{
    /* color: ${(props) => props.theme.color.primary};; */
    font-weight: normal;
    text-decoration: underline;
  }
`

const UserMenu = (props) => {
  const { username = '' } = props
  const [isOpen, toggleModal] = useToggle(false)
  const [isLogging, setIsLogging] = useState(true)

  const toggleForm = () => {
    setIsLogging(!isLogging)
  }

  return (
    <UserMenuContainer>
      <MenuContainer>
        {
          !username ?
            <LoginButtonContainer>
              <LoginButton onClick={() => { setIsLogging(true); toggleModal() }}>Login</LoginButton>
            </LoginButtonContainer> :
            <>
              <CustomAvatar size="30px" withBorder />
              <UserName>{username}</UserName>
            </>
        }
      </MenuContainer>
      {
        username &&
        <DropdownList>
          <Link href="/profile"><ListItem><ItemLink>Profile</ItemLink></ListItem></Link>
          <ListItem><ItemLink>Logout</ItemLink></ListItem>
        </DropdownList>
      }
      <Modal
        isOpen={isOpen}
        close={toggleModal}
        lateralImage="https://storage.googleapis.com/cbn-public/modal-back.png"
        // lateralImage="https://storage.cloud.google.com/cbn-public/modal-background.png"
      >
        {
          isLogging ?
            <LoginForm
              handleCreateAccount={toggleForm}
            /> :
            <RegisterForm
              handleLogin={toggleForm}
            />
        }
      </Modal>
    </UserMenuContainer>
  )
}

export default UserMenu
