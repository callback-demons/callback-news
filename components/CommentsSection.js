import React, { useState } from 'react'
import styled from 'styled-components'
import CommentInput from './CommentInput'
import Comment from './Comment'
import Notification from './Notification'
import useToggle from '../hooks/useToggle'
import { cleanText } from '../utils/validations'

const Title = styled.h2`
  font-size: 28px;
  margin: 20px 10px;
  font-family: ${(props) => props.theme.fontFamilyTitle};
  @media screen and (min-width: 768px) {
    margin: 40px 60px;
  }
`

function CommentsSection({ comments = [], postId = 0 }) {
  const [allComments, setAllComments] = useState(comments)
  const [message, setMessage] = useState('')
  const [isNotifying, toggleNotification] = useToggle(false)

  const url = `https://api.callback-news.com/news/${postId}/comments/`
  const commentRequest = (token = '', email = '') => {
    const textArea = document.querySelector('textarea')
    const content = cleanText(textArea.value)
    if (!content) {
      setMessage('You must write some text')
      toggleNotification()
      return
    }
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => {
        if (response.status !== 200) throw new Error(response.status)
        return response.json()
      })
      .then((data) => {
        setAllComments([
          ...allComments,
          {
            ...data,
            user: {
              email,
              username: email,
            },
          },
        ])
        textArea.value = ''
      })
      .catch((error) => {
        console.log(error)
        setMessage('Error to create the comment')
        toggleNotification()
      })
  }
  const submitComment = () => {
    if (typeof (window) !== 'undefined') {
      const token = window.localStorage.getItem('token') || ''
      const email = window.localStorage.getItem('email') || ''
      if (token && postId) commentRequest(token, email)
      else {
        setMessage('You must login to send a comment.')
        toggleNotification()
      }
    }
  }
  return (
    <>
      <Title>Comments</Title>
      <CommentInput
        placeholder="Add your comment"
        rows={1}
        handleClick={submitComment}
        buttonText="Comment"
      />
      {
        allComments.map((comment) => <Comment comment={comment} key={comment.id} />)
      }
      {
        isNotifying &&
        <Notification
          isNotifying={isNotifying}
          close={toggleNotification}
          message={message}
        />
      }
    </>
  )
}

export default CommentsSection
