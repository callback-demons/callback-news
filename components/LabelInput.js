import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
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
`

const LabelInput = ({ label = '', name, type = null, autoComplete = null, pattern = null, placeholder = '' }) => {
  if (!label) return null
  return (
    <MainContainer>
      <Label>{label}</Label>
      <Input
        name={name || label}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        pattern={pattern}
      />
    </MainContainer>
  )
}

export default LabelInput