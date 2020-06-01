import React from 'react'
import styled from 'styled-components'
import { parse, format } from 'date-fns'
import { circle, skeletonGradient, boxShadow } from '../styled/mixins'
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
  max-width: 35px;
  max-height: 35px;
  margin-top: 20px;
  align-self: start;
  @media screen and (min-width: 768px) {
    margin: 8px;
    max-width: 50px;
    max-height: 50px;
    align-self: center;
  }
`

const Author = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  margin: 15px 10px 0px 2px;
  @media screen and (min-width: 768px) {
    margin: 22px 10px 0px 22px;
  }
`

const PublicationDate = styled.span`
  margin-top: 10px;
  font-size: 0.9rem;
  font-style: italic;
  @media screen and (min-width: 768px) {
    margin-top: 22px;
  }
`

const CommentText = styled.p`
  margin: 10px;
  margin-top: 6px;
  margin-left: 2px;
  font-size: ${(p) => p.theme.mediumSize}px;
  @media screen and (min-width: 768px) {
    margin: 22px;
    margin-top: 6px;
    font-size: ${(p) => p.theme.tabletSize}px;
  }
`

const SkeletonContainer = styled.div`
  ${circle};
  width: 35px;
  padding: 3px;
  margin-top: 5px;
  margin-left: 6px;
  align-self: start;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColorDark, p.theme.skeleton.shineColor, '1.5s', '-100px')};
  @media screen and (min-width: 768px) {
    width: 50px;
    padding: 4px;
    margin-top: 0px;
    align-self: center;
  }
`

const SkeletonInnerContainer = styled.div`
  ${circle};
  width: 35px;
  height: 35px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '1.5s', '-100px')};
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`

const SkeletonDataContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    margin-bottom: 22px;
  }
`

const AuthorSkeleton = styled.div`
  margin: 8px;
  width: 120px;
  height: ${(p) => p.theme.tabletSize}px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '2s', '-200px')};
  @media screen and (min-width: 768px) {
    width: 150px;
    height: ${(p) => p.theme.titleSize}px;
  }
`

const TextSkeleton = styled.div`
  margin: 8px;
  margin-bottom: 2px;
  width: ${(p) => p.textSize};
  height: ${(p) => p.theme.tabletSize}px;
  ${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, '2s', '-200px')};
  @media screen and (min-width: 768px) {
    height: ${(p) => p.theme.titleSize}px;
  }
`

const Comment = (props) => {
  const { comment = {} } = props
  const { content = '', user = {}, isLoading, className } = comment

  if (isLoading || content === '') {
    return (
      <CommentContainer className={className}>
        <SkeletonContainer>
          <SkeletonInnerContainer />
        </SkeletonContainer>
        <SkeletonDataContainer>
          <DataContainer>
            <AuthorSkeleton />
            <AuthorSkeleton />
          </DataContainer>
          <TextSkeleton textSize="90%" />
          <TextSkeleton textSize="60%" />
        </SkeletonDataContainer>
      </CommentContainer>
    )
  }

  return (
    <CommentContainer className={className}>
      <CustomAvatar withBorder />
      <CommentBox>
        <DataContainer>
          <Author>{user.username || 'Privat User'}</Author>
          <PublicationDate>
            {`Posted: ${comment.date_posted || 'Date not available'}`}
          </PublicationDate>
        </DataContainer>
        <CommentText>
          {content}
        </CommentText>
      </CommentBox>
    </CommentContainer>
  )
}

export default Comment
