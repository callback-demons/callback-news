import React from 'react'
import styled from 'styled-components'
import { circle, circleGradientAnimation, skeletonGradient } from '../styled/mixins'

const CategoryContainer = styled.div`
  display: grid;
  justify-content: center;
`

const SkeletonContainer = styled.div`
  ${circle};
  padding: 8px;
  width: 200px;
  ${(p) => skeletonGradient(p.theme.skeletonBaseColorDark, p.theme.skeletonShineColor, '2s', '-200px')};
`

const SkeletonInnerContainer = styled.div`
  ${circle};
  width: 200px;
  height: 200px;
  ${(p) => skeletonGradient(p.theme.skeletonBaseColor, p.theme.skeletonShineColor, '2s', '-200px')};
`

const TitleSkeletonContainer = styled.div`
  margin: 8px;
  height: ${(p) => p.theme.titleSize}px;
  ${(p) => skeletonGradient(p.theme.skeletonBaseColor, p.theme.skeletonShineColor, '2s', '-200px')};
`

const ItemContainer = styled.div`
  ${circle};
  padding: 8px;
  width: 200px;
  height: 200px;
  ${(p) => circleGradientAnimation(p.color, p.theme.colorPrimary, p.theme.colorSecondary, '0.6s')};
`

const ImageContainer = styled.img`
  ${circle};
  background-image: url("${(p) => p.srcImage}");
  width: 200px;
  height: 200px;
`

const CategoryTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  margin: ${(p) => p.theme.space}px;
  font-size: ${(p) => p.theme.titleSize}px;
`

const CategoryItem = (props) => {
  const { title, srcImage, categoryColor = theme.colorPrimaryLight, isLoading } = props

  if (isLoading) {
    return (
      <CategoryContainer>
        <SkeletonContainer>
          <SkeletonInnerContainer />
        </SkeletonContainer>
        <TitleSkeletonContainer />
      </CategoryContainer>
    )
  }

  return (
    <CategoryContainer>
      <ItemContainer color={categoryColor}>
        <ImageContainer src={srcImage} />
      </ItemContainer>
      {
        title &&
        <CategoryTitle>{title}</CategoryTitle>
      }
    </CategoryContainer>
  )
}

export default CategoryItem
