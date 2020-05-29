import styled from 'styled-components'
import LabelInput from './LabelInput'
import Button from './Button'

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px 5px;
  padding: 0px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  @media  screen and (min-width: 568px) {
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
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Saving data...')
  }

  return (
    <MainContainer>
      <Image
        alt="Password Recovery"
        src="https://storage.googleapis.com/cbn-public/password.png"
      />
      <Form onSubmit={handleSubmit}>
        <LabelInput
          label="Email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          required
        />
        <LabelInput
          label="Current Password"
          type="password"
          required
        />
        <LabelInput
          label="New Password"
          type="password"
          required
        />
        <LabelInput
          label="Confirm Password"
          type="password"
          required
        />
        <Button text="Save" handleClick={handleSubmit} />
      </Form>
    </MainContainer>
  )
}

export default PasswordRecovery
