// import { useState } from 'react'
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
  /* grid-gap: 20px 25%; */
  grid-template-columns: 1fr;
  justify-items: center;
  @media  screen and (min-width: 768px) {
    /* padding: 15px; */
    justify-items: right;
    justify-self: flex-start;
    grid-template-columns: 1fr 1fr;
  }
`

const UserData = ({ data = [] }) => {
  const [isEditing, toggleEditing] = useToggle(false)
  // const [userData, setUserData] = userState(data)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Saving data...')
    // toggleEditing()
  }

  // const changeData = (val) => {
  //   console.log('Saving data...')
  // }

  return (
    <MainContainer>
      <Avatar withBorder size="140px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          label="Full Name"
          value={data.name}
          disabled={!isEditing}
          // onChange={(e) => changeData(e.target.value)}
        />
        <LabelInput
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          value={data.email}
          disabled={!isEditing}
        />
        <LabelInput
          label="Current Password"
          type="password"
          disabled={!isEditing}
        />
        <LabelInput
          label="New Password"
          type="password"
          disabled={!isEditing}
        />
        <LabelInput
          label="Confirm Password"
          type="password"
          disabled={!isEditing}
        />
        {
          isEditing ?
            <Button text="Save" handleClick={handleSubmit} /> :
            <Button text="Edit" handleClick={toggleEditing} />
        }
      </Form>
    </MainContainer>
  )
}

export default UserData
