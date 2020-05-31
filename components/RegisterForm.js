import React, { useState } from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import LabelInput from './LabelInput'
import Button from './Button'
import Notification from './Notification'
import useForm from '../hooks/useForm'
import useToggle from '../hooks/useToggle'
import { validateEmail, comparePasswords } from '../utils/validations'

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
  const defaultData = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }
  const [message, setMessage] = useState('')
  const [isNotifying, toggleNotification, setIsNotifying] = useToggle(false)
  const [data, handleChange, handleData, setData] = useForm(defaultData)

  const customHandleChange = (event) => {
    setIsNotifying(false)
    handleChange(event)
  }

  const handleSubmit = (event) => {
    const formData = handleData(event)
    const { name, email, password, passwordConfirmation } = formData
    if (!name) {
      setMessage('Invalid Name.')
      toggleNotification()
      return
    }
    if (!validateEmail(email)) {
      setMessage('Invalid Email.')
      toggleNotification()
      return
    }

    if (!comparePasswords(password, passwordConfirmation)) {
      setMessage("Passwords don't match.")
      toggleNotification()
      return
    }

    const bodyObj = {
      email,
      password,
    }

    if (name && email && password && passwordConfirmation) {
      fetch('https://api.callback-news.com/account/register', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      })
        .then((response) => {
          if (response.status !== 201) throw new Error(response.status)
          return response.json()
        })
        .then((data) => {
          setMessage('User created. Verify your email.')
          toggleNotification()
          setData(defaultData)
        })
        .catch((error) => {
          console.log(error)
          // setMessage(`Error->${error}`)
          // toggleNotification()
        })
    }
  }

  return (
    <MainContainer>
      <Avatar withBorder size="60px" />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          value={data.name}
          onChange={customHandleChange}
          id="name"
          label="Full Name"
          required
        />
        <LabelInput
          value={data.email}
          onChange={customHandleChange}
          id="email"
          label="Email"
          type="email"
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,5}$"
          required
        />
        <LabelInput
          value={data.password}
          onChange={customHandleChange}
          id="password"
          label="Password"
          type="password"
          required
        />
        <LabelInput
          value={data.passwordConfirmation}
          onChange={customHandleChange}
          id="passwordConfirmation"
          label="Confirm Password"
          type="password"
          required
        />
        <Button text="Create Account" onClick={handleSubmit} />
        <LinkText onClick={handleLogin}>Do you have an account? Login</LinkText>
        <Notification
          isNotifying={isNotifying}
          close={toggleNotification}
          message={message}
        />
      </Form>
    </MainContainer>
  )
}

export default RegisterForm
