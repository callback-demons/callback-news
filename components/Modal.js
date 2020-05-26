import React from 'react'
import { useState, useEffect } from 'react'
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
  padding: 0.8em;
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
  &:hover{
    color: darkgray;
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

const loremText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
`

const Modal = ( { isOpen, close, children } ) => {
  return (
    <>
      {
        isOpen ? (
          <ClientPortal selector="#modal">
            <Backdrop>
              <Box>
                <CloseButton onClick={close}>&times;</CloseButton>
                <BoxContent>
                  {children}
                  <p>{loremText}</p>
                  <button type="button" onClick={close}>
                    Close Modal
                  </button>
                </BoxContent>
              </Box>
            </Backdrop>
          </ClientPortal>
        ) : null 
      }
    </>
  )
}

export default Modal
