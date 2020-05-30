import { useState } from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'
import useToggle from '../hooks/useToggle'

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 5px;
  padding: 30px 0px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  @media  screen and (min-width: 568px) {
    grid-template-columns: 1fr 2fr;
  }
`

const Form = styled.form`
  width: 70%;
  padding: 0px;
  display: grid;
  align-items: end;
  grid-gap: 20px 40px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media  screen and (min-width: 768px) {
    justify-items: right;
    justify-self: flex-start;
    grid-template-columns: 1fr 1fr;
  }
`

const UserData = ({ data = [] }) => {
  const [isEditing, toggleEditing] = useToggle(false)
  const [userData, setUserData] = useState({
    ...data,
    password: '',
    newPassword: '',
    newPasswordConfirmation: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Saving data...')
    toggleEditing()
  }

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    })
  }

  return (
    <MainContainer>
      <Avatar withBorder size="140px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          id="name"
          label="Full Name"
          value={userData.name}
          disabled={!isEditing}
          onChange={(e) => handleChange(e)}
        />
        <LabelInput
          id="email"
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          value={userData.email}
          disabled={!isEditing}
          onChange={(e) => handleChange(e)}
        />
        <LabelInput
          id="password"
          label="Current Password"
          type="password"
          value={userData.password}
          disabled={!isEditing}
          onChange={(e) => handleChange(e)}
        />
        <LabelInput
          id="newPassword"
          label="New Password"
          type="password"
          value={userData.newPassword}
          disabled={!isEditing}
          onChange={(e) => handleChange(e)}
        />
        <LabelInput
          id="newPasswordConfirmation"
          label="Confirm Password"
          type="password"
          value={userData.newPasswordConfirmation}
          disabled={!isEditing}
          onChange={(e) => handleChange(e)}
        />
        {
          isEditing ?
            <Button text="Save" onClick={handleSubmit} /> :
            <Button text="Edit" onClick={toggleEditing} />
        }
      </Form>
    </MainContainer>
  )
}

export default UserData
