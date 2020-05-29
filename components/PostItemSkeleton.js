/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import React from 'react'
import styled from 'styled-components'
import useWidth from '../hooks/useWidth'
import InfoPost from './InfoPostSkeleton'
import { skeletonGradient } from '../styled/mixins'
import SkeletonParagraph from './SkeletonParagraph'

const Container = styled.div`
  & a {
    color:${(props) => props.theme.color.ultraBlack};
    &:hover {
      text-decoration:none;
      color:${(props) => props.theme.color.secondary};
    }
  }
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.55);
  border-radius: 25px;
  margin:0 16px;
  overflow:hidden;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:200px 150px 45px;
  grid-template-areas:"image"
                      "content"
                      "footer";
  grid-gap: 8px;
  ${(props) => props.width > 750 && `
  grid-template-columns:1fr 550px;
  grid-template-areas:"label label"
                      "image title"
                      "image description"
                      "footer footer";
  `}
`

const Image = styled.div`
  ${(p) => skeletonGradient(p.theme.skeleton.baseColorDark, p.theme.skeleton.shineColor, '2s', '-200px')};
  object-fit:cover;
  width:100%;
  grid-area:image;
  height:200px;
`

const Description = styled(SkeletonParagraph)`
  grid-area:description;
  margin-bottom:${(props) => props.theme.space * 2}px;
  & div {
    margin: ${(props) => props.theme.space * 1}px 0;
  }
`
const Title = styled(SkeletonParagraph)`
  grid-area:title;
  margin:0;
  & h3 {
    margin:0;
    margin-bottom:${(props) => props.theme.space * 2}px;
    font-size:1.5rem;
  }
`
const Footer = styled.div`
  grid-area:footer;
  padding:0 ${(props) => props.theme.space * 2}px;
  bottom:0;
  display:relative;
`

const Content = styled.div`
  grid-area:content;
`

const PostItemSkeleton = () => {
  const { containerRef, width } = useWidth()
  return (
    <Container ref={containerRef} width={width}>
      <Image />
      <Content>
        <Title
          lines={2}
          height="1em"
          minSize="70%"
          maxSize="96%"
        />
        <Description
          lines={2}
          height=".6em"
          maxSize="96%"
        />
      </Content>
      <Footer>
        <InfoPost />
      </Footer>
    </Container>
  )
}

export default PostItemSkeleton
