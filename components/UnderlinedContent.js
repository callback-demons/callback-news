import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  &:before{
    left: 0;
    bottom: 0;
    height: 2px;
    content: "";
    width: 100%;
    position: absolute;
    background-color: ${(p) => p.color};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.4s ease-in-out 0s;
  }
  &:hover:before{
    visibility: visible;
    transform: scaleX(1);
  }
`

const UnderlinedContent = (props) => {
  const { children, color = 'white' } = props
  return (
    <Container color={color}>
      {children}
    </Container>
  )
}

export default UnderlinedContent
