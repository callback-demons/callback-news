import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'
import useForm from '../hooks/useForm'

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

const RegisterForm = ({ handleLogin = null }) => {
  const [data, handleChange, handleSubmit] = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  return (
    <MainContainer>
      <Avatar withBorder size="60px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          value={data.name}
          onChange={handleChange}
          id="name"
          label="Full Name"
          required
        />
        <LabelInput
          value={data.email}
          onChange={handleChange}
          id="email"
          label="Email"
          type="email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,5}$"
          required
        />
        <LabelInput
          value={data.password}
          onChange={handleChange}
          id="password"
          label="Password"
          type="password"
          required
        />
        <LabelInput
          value={data.passwordConfirmation}
          onChange={handleChange}
          id="passwordConfirmation"
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
