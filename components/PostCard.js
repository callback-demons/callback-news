import React from 'react'
import styled from 'styled-components'
import PostContent from './PostContent'
import { card } from '../styled/mixins'

const Card = styled.div`
  ${card};
  overflow:hidden;
  border-radius:15px;
  background:white;
  position: relative;
  margin: auto;
  width:100%;
  box-sizing:border-box;
  padding:${(props) => props.theme.space}px 30px;
  max-width:1100px;
  margin-top: -30px;
  @media screen and (min-width:1100px) {
    margin-top: -100px;
    padding-left:70px;
    padding-right:70px;
  }
`
const PostCard = ({ post }) => {
  return (
    <Card>
      <PostContent post={post} />
    </Card>
  )
}

export default PostCard
