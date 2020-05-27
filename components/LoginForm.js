import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: grid;
  grid-gap: 25px;
`

const LoginForm = ( {onSubmit=null} ) => {
  return (
    <MainContainer>
      <Avatar withBorder size='100px'/>
      <Form onSubmit={onSubmit}>
        <LabelInput 
          label='Username'
          placeholder='Username'
        />
        <LabelInput 
          label='Password'
          placeholder='Password'
        />
        <Button text='Login' />
      </Form>
    </MainContainer>
  )
}

export default LoginForm
