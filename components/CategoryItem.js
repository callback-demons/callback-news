import React from 'react'
import styled from 'styled-components'
import { circle, circleGradientAnimation, skeletonGradient } from '../styled/mixins'

const CategoryContainer = styled.div`
  display: grid;
  justify-items: center;
`

const SkeletonContainer = styled.div`
  ${circle};
  padding: 8px;
  width: 200px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColorDark, p.theme.skeleton.shineColor, '2s', '-200px')};
`

const SkeletonInnerContainer = styled.div`
  ${circle};
  width: 200px;
  height: 200px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '2s', '-200px')};
`

const TitleSkeletonContainer = styled.div`
  margin: 8px;
  height: ${(p) => p.theme.titleSize}px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '2s', '-200px')};
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
  max-width: 200px;
  font-weight: bold;
  text-align: center;
  white-space: break-spaces;
  margin: ${(p) => p.theme.space}px;
  font-size: ${(p) => p.theme.titleSize}px;
`

const CategoryItem = (props) => {
  const { title, srcImage = '', categoryColor = '#428CD4', isLoading, className } = props

  if (isLoading || srcImage === '') {
    return (
      <CategoryContainer className={className}>
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
