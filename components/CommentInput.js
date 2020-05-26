import React from 'react'
import styled from 'styled-components'
import { inputShadow, transitions } from '../styled/mixins'
import Avatar from './Avatar'

const MainContainer = styled.div`
  margin: 0px auto;
  max-width: 1100px;
  text-align: right;
  margin-bottom: 22px;
  width: calc(100% - 8px);
  @media screen and (min-width: 768px) {
    margin: 5px auto;
    text-align: right;
    margin-bottom: 22px;
  }
`
const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`

const TextArea = styled.textarea`
  ${inputShadow}
  width: 100%;
  resize: none;
  outline: none;
  padding: 12px;
  border-radius: 15px;
  font-size: ${(p) => p.theme.mediumSize}px;
  font-family: ${(props) => props.theme.fontFamilyText};
  &:focus{
    box-shadow: 0 0 5px rgba(234, 68, 146, 1);
  }
  @media screen and (min-width: 768px) {
    padding: 22px;
    font-size: ${(p) => p.theme.tabletSize}px;
  }
`

const CustomAvatar = styled(Avatar)`
  margin: 0px 2px;
  max-width: 35px;
  max-height: 35px;
  margin-top: 10px;
  align-self: start;
  @media screen and (min-width: 768px) {
    margin: 8px;
    max-width: 50px;
    max-height: 50px;
    align-self: center;
  }
`

const CommentButton = styled.button`
  ${transitions}
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 8px 30px;
  border-radius: 6px;
  font-size: ${(p) => p.theme.mediumSize}px;
  border: 2px solid ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.primaryLight};
  &:hover{
    background-color: ${(props) => props.theme.color.primary};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.tabletSize}px;
  }
`

const CommentInput = (props) => {
  const { placeholder = '', rows = 3, handleClick = null, buttonText = 'Comment', className } = props
  return (
    <>
      <MainContainer className={className}>
        <CommentInputContainer>
          <CustomAvatar withBorder />
          <TextArea placeholder={placeholder} rows={rows} />
        </CommentInputContainer>
        <CommentButton onClick={handleClick}>{buttonText}</CommentButton>
      </MainContainer>
    </>
  )
}

export default CommentInput
