import React from 'react'
import styled from 'styled-components'
import ClientPortal from './ClientPortal'
import { transitions } from '../styled/mixins'

const Box = styled.div`
  ${transitions}
  top: 90%;
  right: 20%;
  bottom: 1%;
  left: 20%;
  z-index: 16;
  ${(p) => p.withImage && 'padding: 0.8em;'}
  padding-top: 0px;
  position: fixed;
  /* border-radius: 15px; */
  background-color: ${(p) => p.color || p.theme.color.ultraPink || '#6baff1' || p.theme.color.primaryLight};
  @media screen and (min-width: 480px) {
    padding-left: 12px;
    top: 15%;
    right: 0.5%;
    bottom: 72%;
    left: 70%;
  }
  @media screen and (min-width: 568px) {
    left: 75%;
  }
  @media screen and (min-width: 768px) {
    left: 80%;
  }
  @media screen and (min-width: 1124px) {
    top: 15%;
    right: 0.5%;
    bottom: 75%;
    left: 85%;
  }
`

const CloseButton = styled.span`
  z-index: 12;
  float: right;
  cursor: pointer;
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: relative;
  padding-right: 0.5em;
  &:hover{
    color: lightgray;
  }
`

const BoxContent = styled.div`
  top: -14px;
  /* top: 0; */
  left: 0;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  max-height: 100%;
  @media screen and (min-width: 440px) {
    top: 16px;
  }
  @media screen and (min-width: 480px) {
    top: -6px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    top: -12px;
    width: 100%;
  }
`

const NotificationMessage = styled.p`
  color: white;
  margin: 2px 15px;
  font-weight: 600;
  margin-top: -4px;
  font-size: ${(p) => p.theme.mediumSize}px;
  font-family: ${(props) => props.theme.fontFamilyText};
`

const Notification = ({ isNotifying, close, color = '', message = '', children }) => {
  if (!isNotifying) return null
  return (
    <ClientPortal selector="#notification">
      <Box color={color}>
        <CloseButton onClick={close}>&times;</CloseButton>
        <BoxContent>
          <NotificationMessage>{message}</NotificationMessage>
          {children}
        </BoxContent>
      </Box>
    </ClientPortal>
  )
}

export default Notification
