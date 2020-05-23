import React from 'react'
import styled from 'styled-components'
import Markdown from './Markdown'
import InfoPost from './InfoPost'

const Container = styled.div``

const Title = styled.h1``

const PostContent = ({ post }) => {
  const { content, title } = post
  console.log(post)
  return (
    <Container>
      <Title>{title}</Title>
      <InfoPost />
      <Markdown text={decodeURIComponent(content)} />
    </Container>
  )
}

export default PostContent
