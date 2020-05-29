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
`

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
`

const LinkText = styled.p`
  margin: 0px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  color: ${(p) => p.theme.color.secondary};
  font-size: ${(p) => p.theme.mediumSize}px;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

const RegisterForm = ({ handleSubmit = null, handleLogin = null }) => {
  return (
    <MainContainer>
      <Avatar withBorder size="60px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          label="Full Name"
          required
        />
        <LabelInput
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          required
        />
        <LabelInput
          label="Password"
          type="password"
          required
        />
        <LabelInput
          label="Confirm Password"
          type="password"
          required
        />
        <Button text="Create Account" onClick={handleSubmit} />
        <LinkText onClick={handleLogin}>Do you have an account? Login</LinkText>
      </Form>
    </MainContainer>
  )
}

export default RegisterForm
