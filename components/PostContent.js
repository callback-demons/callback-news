import React from 'react'
import styled from 'styled-components'
import Markdown from './Markdown'
import InfoPost from './InfoPost'

const Container = styled.div`
  padding-top: ${(props) => props.theme.space * 2}px;
`
const Title = styled.h1`
  font-size: 1.7em;
  margin: 10px 0px;
  padding-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 2em;
    margin: 24px 0px;
    padding-top: 16px;
  }
`
const Labels = styled.div``
const Label = styled.div`
  border-radius:5px;
  background:${(props) => props.theme.color.primary};
  color:white;
  display:inline-block;
  padding:${(p) => p.theme.space / 2}px ${(p) => p.theme.space * 2}px;
  min-width:140px;
  text-align:center;
  margin-bottom: ${(props) => props.theme.space}px;
  margin-right: ${(props) => props.theme.space * 2}px;
  font-size:.8em;
`

const PostContent = ({ post }) => {
  return (
    <Container>
      <Labels>
        <Label key={post.category.id}>{post.category.name}</Label>
      </Labels>
      <Title>{post.title}</Title>
      <InfoPost post={{
        date: post.date_posted,
        author: post.author,
        likes: post.likes,
        avatar: null,
      }}
      />
      <Markdown text={decodeURIComponent(post.content)} />
    </Container>
  )
}

export default PostContent
