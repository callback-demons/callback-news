import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Avatar from './Avatar'
import Modal from './Modal'
import useToggle from '../hooks/useToggle'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

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
  margin: 0px 6px;
  display:none;
  @media screen and (min-width: 768px) {
    display:block;
    float:right;
  }
`

const LoginButton = styled.p`
  color: white;
  margin: 0px 12px;
`

const DropdownList = styled.ul`
  margin: 0px;
  display: none;
  list-style: none;
  text-align: right;
  padding-right: 16px;
  position: absolute;
  border-radius: 8px;
  background-color: #c14593;
  @media screen and (min-width: 768px) {
    background-color: ${(props) => props.theme.color.secondary};
  }
  ${UserMenuContainer}:hover &, &:hover&:hover{
    display: block;
  }
`

const ListItem = styled.li`
  margin: 10px 0px;
`

const ItemLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover{
    color: white;
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
            <LoginButton onClick={() => { setIsLogging(true); toggleModal() }}>Login</LoginButton> :
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
