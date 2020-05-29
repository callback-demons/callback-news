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
  background: ${(props) => props.background || props.theme.color.primaryLight};
  &:hover{
    background-color: ${(props) => props.theme.color.primary};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.tabletSize}px;
  }
`

const Button = ({
  text = '',
  type = 'button',
  handleClick = null,
  className,
  background,
}) => {
  if (!text) return null
  return (
    <MainButton
      type={type}
      onClick={handleClick}
      className={className}
      background={background}
    >
      {text}
    </MainButton>
  )
}

export default Button
