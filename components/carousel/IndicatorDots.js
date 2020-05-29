import React from 'react'
import styled from 'styled-components'

const Dot = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: white;
  margin: 7px 5px;
  opacity: ${(props) => (props.selected ? '1' : '0.3')};
  transition-duration: 300ms;
`

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  text-align: center;
  bottom: ${(props) => props.theme.space * 2}px;
  @media screen and(min-width:720px) {
    bottom: ${(props) => props.theme.space * 1}px;
  }
`

export default function IndicatorDots(props) {
  if (props.total < 2) {
    return <Wrapper />
  }
  return (
    <Wrapper>
      {
        Array.from(Array(props.total).keys()).map((i) => (
          <Dot key={i} selected={props.index === i} />
        ))
      }
    </Wrapper>
  )
}
