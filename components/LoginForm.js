import React from 'react'
import Link from 'next/link'
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
  grid-gap: 16px;
`

const LinkText = styled.a`
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

const LoginForm = ({ handleCreateAccount = null }) => {
  const [data, handleChange, handleSubmit] = useForm({
    email: '',
    password: '',
  })
  return (
    <MainContainer>
      <Avatar withBorder size="100px" />
      <Form onSubmit={handleSubmit}>
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
        <Link href="/recover">
          <LinkText>Did you forget your password?</LinkText>
        </Link>
        <Button text="Login" onClick={handleSubmit} />
        <LinkText onClick={handleCreateAccount}>Don&#39;t have an account? Create one</LinkText>
      </Form>
    </MainContainer>
  )
}

export default LoginForm
