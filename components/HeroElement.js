import React from 'react'
import styled from 'styled-components'
import ClampLines from 'react-clamp-lines'
import Link from 'next/link'

const Cta = styled.a`
  margin-top:${(props) => props.theme.space}px;
  display:inline-block;
  color:white;
  text-decoration:underline;
  &:hover {
    text-shadow: 2px 2px 3px rgba(0,0,0,0.44);
  }

`

const Container = styled.div`
  background-image:url(${(props) => props.backgroundImage});
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
  background: rgba(0,0,0,0.3);
  color: white;
  padding: 0 ${(props) => props.theme.space * 2}px;
  padding-bottom:${(props) => props.theme.space * 4}px;
  @media screen and (min-width:720px){
    padding:${(props) => props.theme.space}px ${(props) => props.theme.space * 3}px;
    padding-bottom:${(props) => props.theme.space * 4}px;
  }
`
const ContentWrapper = styled.div``
const Title = styled(ClampLines)``
const Content = styled(ClampLines)``
const Footer = styled.div``

const HeroElement = ({ className, post = {} }) => {
  console.log(post)
  const {
    id,
    title,
    // author_name: author,
    description,
    // content,
    created_at: date,
    media,
  } = post
  return (
    <Container
      backgroundImage={media && media[0].url}
    >
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
