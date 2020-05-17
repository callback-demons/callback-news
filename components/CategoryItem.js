import React from 'react'
import styled from 'styled-components'
import { circle, circleGradientAnimation } from '../styled/mixins'

const ItemContainer = styled.div`
  ${circle};
  ${(p) => circleGradientAnimation(p.theme.colorPrimaryLight, p.theme.colorPrimary, p.theme.colorSecondary, '1s')};
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
  const { srcImage } = props
  return (
    <ItemContainer>
      <ImageContainer src={srcImage} />
    </ItemContainer>
  )
}

export default CategoryItem
