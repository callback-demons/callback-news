import React from 'react'
import styled from 'styled-components'
import { parse, format } from 'date-fns'
import { boxShadow } from '../styled/mixins'
import Avatar from './Avatar'

const CommentContainer = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 1100px;
  align-items: center;
  width: calc(100% - 8px);
  @media screen and (min-width: 768px) {
    margin: 5px auto;
  }
`

const CommentBox = styled.div`
  /* ${boxShadow} */
  width: 100%;
  border-radius: 15px;
`

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
`

const CustomAvatar = styled(Avatar)`
  align-self: start;
  margin-top: 30px;
  max-width: 35px;
  max-height: 35px;
  @media screen and (min-width: 768px) {
    margin: 8px;
    max-width: 50px;
    max-height: 50px;
    align-self: center;
  }
`

const Author = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 22px 10px 0px 22px;
`

const PublicationDate = styled.span`
  font-size: 0.9rem;
  margin-top: 22px;
  font-style: italic;
`

const CommentText = styled.p`
  margin: 22px;
  margin-top: 6px;
  font-size: ${(p) => p.theme.mediumSize}px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.tabletSize}px;
  }
`

const Comment = (props) => {
  const { text } = props
  const date = parse('Fri, 08 May 2020 10:05:49', 'EEE, dd MMM yyyy HH:mm:ss', new Date())
  return (
    <CommentContainer>
      <CustomAvatar withBorder />
      <CommentBox>
        <DataContainer>
          <Author>William Velázquez</Author>
          <PublicationDate>
            {`Posted: ${format(date, 'MM/dd/yyyy')}`}
          </PublicationDate>
        </DataContainer>
        <CommentText>
          {text}
        </CommentText>
      </CommentBox>
    </CommentContainer>
  )
}

export default Comment
