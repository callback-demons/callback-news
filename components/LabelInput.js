import React from 'react'
import styled from 'styled-components'
import EyeIcon from './EyeIcon'
import useToggle from '../hooks/useToggle'

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Label = styled.span`
  margin-bottom: 4px;
  font-size: ${(p) => p.theme.mediumSize}px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.mediumSize}px;
  }
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding-top: 3px;
  padding-bottom: 2px;
  font-size: ${(p) => p.theme.tabletSize}px;
  border-bottom: 2px solid ${(p) => p.theme.color.ultraBlack};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.titleSize}px;
  }
  &:disabled {
    cursor: not-allowed;
    border-radius: 10px 10px 0px 0px;
  }
`

const CustomEyeIcon = styled(EyeIcon)`
  cursor: pointer;
  margin: 5px -30px;
`

const LabelInput = ({ id = null, label = '', name, type = null, value = '', autoComplete = null, pattern = null, placeholder = '', onChange = null, required = null, disabled = null, blocked = true }) => {
  const [isBlocked, toggleIsBlocked] = useToggle(blocked)
  if (!label) return null
  return (
    <MainContainer>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          id={id || name || label}
          name={name || label}
          type={type === 'password' ? isBlocked ? type : null : type}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
          pattern={pattern}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
        {
          type === 'password' &&
          <CustomEyeIcon onClick={toggleIsBlocked} isBlocked={isBlocked} />
        }
      </InputContainer>
    </MainContainer>
  )
}

export default LabelInput
