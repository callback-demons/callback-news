import React from 'react'
import styled from 'styled-components'
import PostItem from './PostItem'

const Container = styled.div`
  margin: auto;
  width: calc(100% - 32px);
  box-sizing:content-box;
`

const Main = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap:${(props) => props.theme.space * 6}px ${(props) => props.theme.space * 1}px;
`

const Title = styled.h2`
  font-size:28px;
  font-family:${(props) => props.theme.fontFamilyTitle};
`

const PostItemList = ({ posts, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Main>
        {
          posts.map((post) => <PostItem post={post} />)
        }
      </Main>
    </Container>
  )
}

export default PostItemList
