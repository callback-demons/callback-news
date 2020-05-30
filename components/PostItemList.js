import React from 'react'
import styled from 'styled-components'
import PostItem from './PostItem'

const Container = styled.div`
  margin: auto;
  width: calc(100% - 32px);
  box-sizing:content-box;
  width:100%;
`

const Main = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(${(props) => props.maxWidth || '400px'}, 1fr));
  grid-gap:${(props) => props.theme.space * 3}px;
  padding:0 ${(props) => props.theme.space * 3}px;
  /* justify-content:space-around; */
`

const Title = styled.h2`
  font-size:28px;
  font-family:${(props) => props.theme.fontFamilyTitle};
  padding:0 ${(props) => props.theme.space * 3}px;
  padding-top:${(props) => props.theme.space * 2}px;

`

const PostItemList = ({ posts, title, maxWidth, className }) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Main maxWidth={maxWidth}>
        {
          posts.map((post) => <PostItem post={post} />)
        }
      </Main>
    </Container>
  )
}

export default PostItemList
