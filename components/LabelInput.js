import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.span`
  font-size: ${(p) => p.theme.mobileSize}px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.mediumSize}px;
  }
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${(p) => p.theme.color.ultraBlack };
`

const LabelInput = ( {label='', autoComplete=null, placeholder} ) => {
  if (!label) return null
  return (
    <MainContainer>
      <Label>{label}</Label>
      <Input
        autoComplete={autoComplete}
        placeholder={placeholder||''}
      />
    </MainContainer>
  )
}

export default LabelInput
