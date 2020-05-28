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
  grid-gap: 16px;
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

const LoginForm = ({ handleSubmit = null, handleForgetPassword = null, handleCreateAccount = null }) => {
  return (
    <MainContainer>
      <Avatar withBorder size="100px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          // placeholder="Username"
        />
        <LabelInput
          label="Password"
          type="password"
          // placeholder="Password"
        />
        <LinkText onClick={handleForgetPassword}>Did you forget your password?</LinkText>
        <Button text="Login" handleClick={handleSubmit} />
        <LinkText onClick={handleCreateAccount}>Don't have an account? Create one</LinkText>
      </Form>
    </MainContainer>
  )
}

export default LoginForm
