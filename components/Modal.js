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

const Modal = ({ isOpen, close, children }) => {
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
