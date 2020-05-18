import React from 'react'
import styled from 'styled-components'
import { circle, circleGradientAnimation, skeletonGradient } from '../styled/mixins'

const SkeletonContainer = styled.div`
  ${circle};
  ${(p) => skeletonGradient(p.theme.skeletonBaseColor, p.theme.skeletonShineColor, '3s', '-200px')};
  width: 200px;
  height: 200px;
`

const ItemContainer = styled.div`
  ${circle};
  ${(p) => circleGradientAnimation(p.color, p.color, p.theme.colorSecondary, '0.6s')};
  padding: 8px;
  width: 200px;
  height: 200px;
`

const ImageContainer = styled.img`
  ${circle};
  background-image: url("${(p) => p.srcImage}");
  width: 200px;
  height: 200px;
`

const CategoryItem = (props) => {
  const { srcImage, categoryColor = theme.colorPrimaryLight, isLoading } = props
  if (isLoading) return <SkeletonContainer />
  return (
    <ItemContainer color={categoryColor}>
      <ImageContainer src={srcImage} />
    </ItemContainer>
  )
}

export default CategoryItem
