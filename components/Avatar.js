import React from 'react'
import styled from 'styled-components'

const DEFAULT_IMAGE = `https://robohash.org/callback-${Math.floor(Math.random() * 1000)}`

const CircleImage = styled.img`
  background: white;
  border-radius: 50%;
  box-sizing: border-box;
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  margin: ${(props) => props.theme.space}px;
  ${(props) => props.withBorder && `border: 3px solid ${props.theme.color.primary}`};
`
const Avatar = (props) => {
  const { image = DEFAULT_IMAGE, size = '35px', margin = 8, withBorder, borderColor = '#004E9A', className } = props
  return (
    <CircleImage
      src={image}
      size={size}
      margin={margin}
      className={className}
      withBorder={withBorder}
      borderColor={borderColor}
    />
  )
}

export default Avatar
