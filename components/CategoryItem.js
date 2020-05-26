import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { circle, circleGradientAnimation, skeletonGradient } from '../styled/mixins'

const CategoryContainer = styled.a`
  display: grid;
  justify-content: center;
  color:${(props) => props.theme.color.ultraBlack};
  &:hover {
    text-decoration:none;
  }
`

const SkeletonContainer = styled.div`
  ${circle};
  width: 100px;
  padding: 6px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColorDark, p.theme.skeleton.shineColor, '2s', '-200px')};
  @media screen and (min-width: 768px) {
    width: 150px;
    padding: 7px;
  }
  @media screen and (min-width: 1024px) {
    width: 180px;
    padding: 8px;
  }
`

const SkeletonInnerContainer = styled.div`
  ${circle};
  width: 100px;
  height: 100px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '2s', '-200px')};
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    width: 180px;
    height: 180px;
  }
`

const TitleSkeletonContainer = styled.div`
  margin: 8px;
  height: ${(p) => p.theme.tabletSize}px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '2s', '-200px')};
  @media screen and (min-width: 768px) {
    height: ${(p) => p.theme.titleSize}px;
  }
`

const ItemContainer = styled.div`
  ${circle};
  width: 100px;
  height: 100px;
  padding: 6px;
  ${(p) => circleGradientAnimation(p.color, p.theme.colorPrimary, p.theme.colorSecondary, '0.6s')};
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
    padding: 7px;
  }
  @media screen and (min-width: 1024px) {
    width: 180px;
    height: 180px;
    padding: 8px;
  }
`

const ImageContainer = styled.img`
  ${circle};
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-image: url("${(p) => p.srcImage}");
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    width: 180px;
    height: 180px;
  }
`

const CategoryTitle = styled.h2`
  max-width: 100px;
  font-weight: bold;
  text-align: center;
  white-space: break-spaces;
  margin: ${(p) => p.theme.space}px;
  font-size: ${(p) => p.theme.tabletSize}px;
  @media screen and (min-width: 768px) {
    max-width: 150px;
    font-size: ${(p) => p.theme.titleSize}px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 180px;
  }
`

const CategoryItem = (props) => {
  const { title, srcImage = '', categoryColor = '#428CD4', isLoading, className, id = '1' } = props

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
    <Link href={`/category/${id}`}>
      <CategoryContainer>
        <ItemContainer color={categoryColor}>
          <ImageContainer src={srcImage} />
        </ItemContainer>
        {
          title &&
          <CategoryTitle>{title}</CategoryTitle>
        }
      </CategoryContainer>
    </Link>
  )
}

export default CategoryItem
