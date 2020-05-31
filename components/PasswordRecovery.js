import styled from 'styled-components'
import LabelInput from './LabelInput'
import Button from './Button'
import useForm from '../hooks/useForm'

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 5px;
  padding: 0px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  @media screen and (min-width: 568px) {
    padding: 30px 0px;
    grid-template-columns: 1fr 2fr;
  }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  min-width: 150px;
  max-width: 300px;
`

const Form = styled.form`
  width: 70%;
  padding: 0px;
  display: grid;
  align-items: end;
  grid-gap: 20px 40px;
  justify-items: center;
  grid-template-columns: 1fr;
`

const PasswordRecovery = () => {
  const [data, handleChange, handleSubmit] = useForm({
    email: '',
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  })
  return (
    <MainContainer>
      <Image
        alt="Password Recovery"
        src="https://storage.googleapis.com/cbn-public/password.png"
      />
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
          label="Current Password"
          type="password"
          required
        />
        <LabelInput
          value={data.newPassword}
          onChange={handleChange}
          id="newPassword"
          label="New Password"
          type="password"
          required
        />
        <LabelInput
          value={data.newPasswordConfirmation}
          onChange={handleChange}
          id="newPasswordConfirmation"
          label="Confirm Password"
          type="password"
          required
        />
        <Button text="Save" onClick={handleSubmit} />
      </Form>
    </MainContainer>
  )
}

export default PasswordRecovery
