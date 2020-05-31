import React from 'react'
import styled from 'styled-components'
import { circle, skeletonGradient } from '../styled/mixins'

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
    width: 170px;
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
    width: 170px;
    height: 170px;
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

const CategoryItemSkeleton = ({ className }) => {
  return (
    <>
      <SkeletonContainer className={className}>
        <SkeletonInnerContainer />
      </SkeletonContainer>
      <TitleSkeletonContainer />
    </>
  )
}

export default CategoryItemSkeleton
