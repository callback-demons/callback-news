import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Heart from './Heart'
import Avatar from './Avatar'
import Notification from './Notification'

import useWidth from '../hooks/useWidth'
import useToggle from '../hooks/useToggle'

const Info = styled.div`
  display:grid;
  width:100%;
  grid-template-columns:40px 1fr 20px;
  grid-gap:${(props) => props.theme.space}px;
  ${(props) => props.width > 600 && `
    width: 230px;
  `}
`
const Meta = styled.div`
  grid-column-start:2;
  font-size:.7em;
  margin-right:${(props) => props.theme.space}px;
  & span {
    margin-right:${(props) => props.theme.space * 3}px;
  }
`
const Author = styled.p`
  font-size:1.3rem;
  margin:0;
  padding:0;
`
const LikeContainer = styled.div`
  margin-top: 4px;
`
const Likes = styled.div`
  font-family:${(props) => props.theme.fontFamilyTitle};
  font-size:10px;
  text-align:center;
`

const InfoPost = ({ post, className }) => {
  const { postId, date, author, likes: tempLikes, liked, avatar } = post
  // console.log(liked)
  const { containerRef, width } = useWidth()
  const [isLiked, setIsLiked] = useState(liked)
  const [likes, setLikes] = useState(tempLikes)
  const [message, setMessage] = useState('')
  const [isNotifying, toggleNotification] = useToggle(false)

  useEffect(() => {
    setIsLiked(liked)
    setLikes(setLikes)
  }, [null])

  const url = `https://api.callback-news.com/news/${postId}/like`

  const likeRequest = (token = '') => {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    })
      .then((response) => {
        if (response.status !== 200) throw new Error(response.status)
        return response.json()
      })
      .then((data) => {
        console.log(data.message)
        setLikes(!isLiked ? likes + 1 : likes - 1)
        setIsLiked(!isLiked)
      })
      .catch((error) => {
        console.log(error)
        setMessage('Error')
        toggleNotification()
      })
  }
  const handleLike = (event) => {
    //Check if logged or show notification
    if (typeof (window) !== 'undefined') {
      const token = window.localStorage.getItem('token') || ''
      if (token) likeRequest(token)
      else {
        setMessage('You must login to like the news.')
        toggleNotification()
      }
    }
  }
  return (
    <Info className={className} ref={containerRef} width={width}>
      <Avatar src={avatar} withBorder />
      <Meta>
        <Author>{author}</Author>
        <span>
          {`Posted: ${date}`}
        </span>
      </Meta>
      <LikeContainer>
        <Heart onClick={handleLike} isLiked={isLiked} />
        <Likes>{likes}</Likes>
      </LikeContainer>
      {
        isNotifying &&
        <Notification
          isNotifying={isNotifying}
          close={toggleNotification}
          message={message}
        />
      }
    </Info>
  )
}

export default InfoPost
