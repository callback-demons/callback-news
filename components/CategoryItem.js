import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { circle, circleGradientAnimation } from '../styled/mixins'
import CategoryItemSkeleton from './CategoryItemSkeleton'

const Container = styled.a`
  display: grid;
  justify-content: center;
  color:${(props) => props.theme.color.ultraBlack};
  &:hover {
    text-decoration:none;
  }
`

const Item = styled.div`
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
    width: 170px;
    height: 170px;
    padding: 8px;
  }
`

const Image = styled.img`
  ${circle};
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-image: url("${(p) => p.srcImage}");
  z-index:9;
  position:relative;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 1024px) {
    width: 170px;
    height: 170px;
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
    max-width: 170px;
  }
`

const CategoryItem = (props) => {
  const { title, srcImage = '', categoryColor = '#428CD4', isLoading, className, id = '1' } = props
  if (isLoading || srcImage === '') {
    return (
      <Container className={className}>
        <CategoryItemSkeleton />
      </Container>
    )
  }

  return (
    <Link href={{ pathname: `/category/${id}`, query: { name: title } }}>
      <Container>
        <Item color={categoryColor}>
          <Image src={srcImage} />
        </Item>
        { title && <CategoryTitle>{title}</CategoryTitle>}
      </Container>
    </Link>
  )
}

export default CategoryItem
