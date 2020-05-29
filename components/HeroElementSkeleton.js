import React from 'react'
import styled from 'styled-components'
import ClampLines from 'react-clamp-lines'
import Link from 'next/link'
import SkeletonParagraph from './SkeletonParagraph'
import { skeletonGradient } from '../styled/mixins'

const Container = styled.div`
  ${(p) => skeletonGradient(p.theme.skeleton.baseColorDark, p.theme.skeleton.shineColor, '2s', '-200px')};
  padding-top:150px;
  @media screen and (min-width:720px){
    padding:0 10%;
    padding-top:150px;
  }
`
const PostOverlay = styled.article`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 24px 40px;
  grid-gap:${(props) => props.theme.space * 2}px;
  align-content: space-between;
  height: 300px;
  background: rgba(0,0,0,0.1);
  color: white;
  padding: 0 ${(props) => props.theme.space * 2}px;
  padding-bottom:${(props) => props.theme.space * 4}px;
  @media screen and (min-width:720px){
    padding:${(props) => props.theme.space}px ${(props) => props.theme.space * 3}px;
    padding-bottom:${(props) => props.theme.space * 4}px;
  }
`
const Header = styled.div`
  padding-top:30px;
`
const Title = styled(SkeletonParagraph)`
  padding-top:100px;
`
const Content = styled(SkeletonParagraph)``
const Footer = styled.div``

const HeroElement = ({ className }) => {
  return (
    <Container>
      <PostOverlay>
        <Header>
          <Title
            lines={4}
            ellipsis="..."
            innerElement="h2"
            buttons={false}
          />
        </Header>
        <Footer>
          <Content
            lines={2}
            ellipsis="..."
            innerElement="div"
            buttons={false}
          />
        </Footer>
      </PostOverlay>
    </Container>
  )
}

export default HeroElement
