import React, { useState } from 'react'
import { parse, format } from 'date-fns'
import styled from 'styled-components'

import Heart from './Heart'

const Avatar = styled.img`
  width:100%;
  object-fit:cover;
  border-radius:50%;
  border:3px solid ${(props) => props.theme.color.primary};
  box-sizing: border-box;
`
const Info = styled.div`
  display:grid;
  grid-template-columns:40px 1fr 20px;
  grid-gap:${(props) => props.theme.space}px;
`
const Meta = styled.div`
  grid-column-start:2;
  font-size:.7em;
  & span {
    margin-right:${(props) => props.theme.space * 3}px;
  }
`
const Author = styled.p`
  font-size:1.3rem;
  margin:0;
  padding:0;
`
const LikeContainer = styled.div``
const Likes = styled.div`
  font-family:${(props) => props.theme.fontFamilyTitle};
  font-size:10px;
  text-align:center;
`

const InfoPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false)
  const handleLike = (event) => {
    setIsLiked(!isLiked)
  }
  // Fri, 08 May 2020 10:05:49 GMT
  const date = parse(post.pubDate, 'EEE, dd MMM yyyy HH:mm:ss', new Date())
  return (
    <Info>
      <Avatar src={post.avatar} />
      <Meta>
        <Author>David Behar Lombrozo</Author>
        {/* <span>20 min read</span> */}
        <span>
          Posted:
          {' '}
          {format(date, 'MM/dd/yyyy')}
        </span>
      </Meta>
      <LikeContainer>
        <Heart onClick={handleLike} isLiked={isLiked} />
        <Likes>{post.likes + isLiked}</Likes>
      </LikeContainer>
    </Info>
  )
}

export default InfoPost
