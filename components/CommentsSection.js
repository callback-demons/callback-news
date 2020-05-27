import React from 'react'
import styled from 'styled-components'
import CommentInput from './CommentInput'
import Comment from './Comment'

const Title = styled.h2`
  font-size: 28px;
  margin: 20px 10px;
  font-family: ${(props) => props.theme.fontFamilyTitle};
  @media screen and (min-width: 768px) {
    margin: 40px 60px;
  }
`
const testComment = "Comentario de Prueba - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"

function CommentsSection({ comments = [{ id: 1, text: testComment }] }) {
  return (
    <>
      <Title>Comments</Title>
      <CommentInput
        placeholder="Add your comment"
        rows={1}
        handleClick={null}
        buttonText="Comment"
      />
      {
        comments.map((comment) => <Comment text={comment.text} key={comment.id} />)
      }
    </>
  )
}

export default CommentsSection
