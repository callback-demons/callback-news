import React from 'react'
import styled from 'styled-components'

const CircleImage = styled.img`
  background: white;
  border-radius: 50%;
  box-sizing: border-box;
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  /* margin: ${(props) => props.theme.space}px; */
  ${(props) => props.withBorder && `border: ${props.borderSize}px solid ${props.theme.color.primary}`}
`
const Avatar = (props) => {
  const { image = 'https://storage.googleapis.com/cbn-public/user.svg', size = '35px', margin = 8, withBorder, borderColor = '#004E9A', borderSize = 3, className } = props
  return (
    <CircleImage
      src={image}
      size={size}
      margin={margin}
      className={className}
      withBorder={withBorder}
      borderSize={borderSize}
      borderColor={borderColor}
    />
  )
}

export default Avatar
