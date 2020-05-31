import React from 'react'
import Link from 'next/link'
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
  cursor: pointer;
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
  const { category, content, title, author, likes } = post
  return (
    <Container>
      <Labels>
        <Link href={{ pathname: `/category/${category.id}`, query: { name: category.name } }}>
          <Label key={category.id}>{category.name}</Label>
        </Link>
      </Labels>
      <Title>{title}</Title>
      <InfoPost post={{
        date: post.date_posted,
        author,
        likes,
        avatar: null,
      }}
      />
      <Markdown text={decodeURIComponent(content)} />
    </Container>
  )
}

export default PostContent
