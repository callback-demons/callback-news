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
  float: right;
  cursor: pointer;
  font-size: 24px;
  color: lightgray;
  font-weight: bold;
  ${(p) => p.withImage && 'padding-right: 0.5em;'}
  &:hover{
    color: darkgray;
  }
`

const BoxWithImage = styled.div`
  width: 100%;
  height: 100%;
`
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 15px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 13px 0px 0px 13px;
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
  return (
    <>
      {
        isOpen ? (
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
                    </BoxWithImage> :
                    <BoxContent>
                      {children}
                    </BoxContent>
                }
              </Box>
            </Backdrop>
          </ClientPortal>
        ) : null
      }
    </>
  )
}

export default Modal
