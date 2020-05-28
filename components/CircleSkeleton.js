import React from 'react'
import styled from 'styled-components'
import { skeletonGradient } from '../styled/mixins'

const CircleImage = styled.div`
  ${(p) => skeletonGradient(p.theme.skeleton.baseColorDark, p.theme.skeleton.shineColor, '2s', '-200px')};
  border-radius: 50%;
  box-sizing: border-box;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(p) => p.borderSize}px solid ${(p) => p.theme.skeleton.baseColorDark};
`
const AvatarSkeleton = (props) => {
  const {
    image = `https://robohash.org/callback-${Math.floor(Math.random() * 1000)}`,
    size = '35px',
    borderSize = 3,
    className,
  } = props
  return (
    <CircleImage
      className={className}
      src={image}
      size={size}
      borderSize={borderSize}
    />
  )
}

export default AvatarSkeleton
