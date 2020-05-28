import React from 'react'
import styled from 'styled-components'
import ClientPortal from './ClientPortal'

const Backdrop = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
`

const Box = styled.div`
  top: 10%;
  right: 10%;
  bottom: 10%;
  left: 10%;
  ${(p) => p.withImage && 'padding: 0.8em;'}
  padding-top: 0px;
  position: absolute;
  border-radius: 15px;
  background-color: white;
`

const CloseButton = styled.span`
  z-index: 10;
  float: right;
  cursor: pointer;
  font-size: 24px;
  color: lightgray;
  font-weight: bold;
  position: relative;
  ${(p) => p.withImage && 'padding-right: 0.5em;'}
  &:hover{
    color: darkgray;
  }
`

const BoxWithImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
`

const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: none;
  border-radius: 13px 0px 0px 13px;
  background-color: #1a507f;
  /* background-color: #1a2d4f; */
  @media screen and (min-width: 768px) {
    display: block;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 13px 0px 0px 13px;
`

const RigthContent = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  position: relative;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

const BoxContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  overflow: auto;
  position: relative;
  max-height: calc(100% - 40px);
`

const Modal = ({ isOpen, close, lateralImage = '', children }) => {
  if (!isOpen) return null
  return (
    <ClientPortal selector="#modal">
      <Backdrop>
        <Box withImage={!lateralImage}>
          <CloseButton onClick={close} withImage={!!lateralImage}>&times;</CloseButton>
          {
            lateralImage ?
              <BoxWithImage>
                <ImageContainer>
                  <Image src={lateralImage} />
                </ImageContainer>
                <RigthContent>
                  {children}
                </RigthContent>
              </BoxWithImage> :
              <BoxContent>
                {children}
              </BoxContent>
          }
        </Box>
      </Backdrop>
    </ClientPortal>
  )
}

export default Modal
