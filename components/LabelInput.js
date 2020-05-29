import React from 'react'
import styled from 'styled-components'

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

const Input = styled.input`
  border: none;
  outline: none;
  font-size: ${(p) => p.theme.tabletSize}px;
  border-bottom: 2px solid ${(p) => p.theme.color.ultraBlack};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.titleSize}px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

const LabelInput = ({ id = null, label = '', name, type = null, value = '', autoComplete = null, pattern = null, placeholder = '', onChange = null, required = null, disabled = null }) => {
  if (!label) return null
  return (
    <MainContainer>
      <Label>{label}</Label>
      <Input
        id={id || name || label}
        name={name || label}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
    </MainContainer>
  )
}

export default LabelInput
