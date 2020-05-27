import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Modal from './Modal'
import useModal from '../hooks/useModal'

const UserMenuContainer = styled.div`
  margin: 0px;
  @media  screen and (min-width: 768px) {
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
  color: white;
  margin: 0px 6px;
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
  @media  screen and (min-width: 768px) {
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
  const { isOpen, toggleModal } = useModal()

  return (
    <UserMenuContainer>
      <MenuContainer>
        {
          !username ?
            <LoginButton onClick={toggleModal}>Login</LoginButton> :
            <>
              <CustomAvatar size="30px" withBorder src={`https://robohash.org/callback-${Math.floor(Math.random() * 1000)}`} />
              <UserName>{username}</UserName>
            </>
        }
      </MenuContainer>
      {
        username &&
        <DropdownList>
          <ListItem><ItemLink>Profile</ItemLink></ListItem>
          <ListItem><ItemLink>Logout</ItemLink></ListItem>
        </DropdownList>
      }
      <Modal isOpen={isOpen} close={toggleModal} />
    </UserMenuContainer>
  )
}

export default UserMenu
