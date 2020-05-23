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
  margin-top: -100px;
  width:calc(100% - 8px);
  box-sizing:border-box;
  padding:${(props) => props.theme.space * 2}px 30px;
`
const PostCard = ({ post }) => {
  return (
    <Card>
      <PostContent post={post} />
    </Card>
  )
}

export default PostCard
