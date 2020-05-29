import React from 'react'
import styled from 'styled-components'
import ClampLines from 'react-clamp-lines'
import Link from 'next/link'
import AsyncImage from './AsyncImage'

const Container = styled.div``
const ContentWrapper = styled.div``

const PostOverlay = styled.article`
  margin:0;
  position: absolute;
  bottom:0;
  z-index:10;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 24px 40px;
  grid-gap:${(props) => props.theme.space * 2}px;
  align-content: space-between;
  height: 300px;
  background: rgba(0,0,0,0.3);
  color: white;
  padding: 0 ${(props) => props.theme.space * 2}px;
  padding-bottom:${(props) => props.theme.space * 4}px;
  @media screen and (min-width:720px){
    padding:${(props) => props.theme.space}px ${(props) => props.theme.space * 3}px;
    padding-bottom:${(props) => props.theme.space * 4}px;
    padding:0 10%;

  }
`
const Title = styled(ClampLines)``
const Content = styled(ClampLines)``
const Footer = styled.div``
const Image = styled(AsyncImage)`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`
const Cta = styled.a`
  margin-top:${(props) => props.theme.space}px;
  display:inline-block;
  color:white;
  text-decoration:underline;
  &:hover {
    text-shadow: 2px 2px 3px rgba(0,0,0,0.44);
  }
`
const HeroElement = ({ className, post = {}, onLoaded = null }) => {

  const {
    id,
    title,
    description,
    created_at: date,
    media,
  } = post
  return (
    <Container>
      <Image
        alt="alt"
        src={media && media[0].url}
        onLoaded={onLoaded}
      />
      <PostOverlay>
        <ContentWrapper>
          <Title
            text={title || ''}
            lines={2}
            ellipsis="..."
            innerElement="h2"
            buttons={false}
          />
          <Content
            text={description || ''}
            lines={3}
            ellipsis="..."
            innerElement="div"
            buttons={false}
          />
          <Link href={`/post/${id}`}>
            <Cta>
              Read More
            </Cta>
          </Link>
        </ContentWrapper>
        <Footer>
          Posted:
          {' '}
          {date}
        </Footer>
      </PostOverlay>
    </Container>
  )
}

export default HeroElement
