import { useState } from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'

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

const UserData = () => {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Saving data...')
  }

  const toggleEditing = () => {
    setIsEditing(!isEditing)
  }

  return (
    <MainContainer>
      <Avatar withBorder size="140px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          label="Full Name"
        />
        <LabelInput
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
        />
        <LabelInput
          label="Current Password"
          type="password"
        />
        <LabelInput
          label="New Password"
          type="password"
        />
        <LabelInput
          label="Confirm Password"
          type="password"
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
