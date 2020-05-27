import React from 'react'
import styled from 'styled-components'
import { transitions } from '../styled/mixins'

const MainButton = styled.button`
  ${transitions}
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 8px 30px;
  border-radius: 6px;
  font-size: ${(p) => p.theme.mediumSize}px;
  background-color: ${(props) => props.theme.color.primaryLight};
  &:hover{
    background-color: ${(props) => props.theme.color.primary};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.tabletSize}px;
  }
`

const Button = ({text='', handleClick = null}) => {
  if (!text) return null
  return (
    <MainButton 
      onClick={handleClick}
    >
      {text}
    </MainButton>
  )
}

export default Button
