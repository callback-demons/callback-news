import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'
import Notification from './Notification'
import useForm from '../hooks/useForm'
import useToggle from '../hooks/useToggle'
import useUserContext from '../hooks/useUserContext'

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

const LoginForm = ({ handleCreateAccount = null, toggleModal = null }) => {
  const [message, setMessage] = useState('')
  const [isNotifying, toggleNotification] = useToggle(false)
  const [user, setUser] = useUserContext()
  const [data, handleChange, handleLogin] = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    const formData = handleLogin(event)
    const { email: username, password } = formData

    if (username && password) {
      fetch('https://api.callback-news.com/api/auth', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': username,
          'password': `${password}`,
        }),
      })
        .then((response) => {
          if (response.status !== 200) throw new Error(response.status)
          return response.json()
        })
        .then((data) => {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('id', data.id)
          window.localStorage.setItem('email', username)
          setUser({
            ...user,
            email: username,
            token: data.token,
          })
          toggleModal()
        })
        .catch((error) => {
          console.log(error)
          setMessage('Failed to login.')
          toggleNotification()
        })
    }
  }

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
        <Notification
          isNotifying={isNotifying}
          close={toggleNotification}
          message={message}
        />
      </Form>
    </MainContainer>
  )
}

export default LoginForm
