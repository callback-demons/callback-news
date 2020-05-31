import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  z-index:20;
  width: 100%;
  z-index: 7;
  bottom: 0;
  text-align: center;
  background:red;
  display:none;
  @media screen and(min-width:720px) {
    display:block;
  }
`

const button = `
  width: 30px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: -300px;
  font: 16px/30px sans-serif;
  color: rgba(255,255,255,0.8);
  background:rgba(0,0,0,.5);
  padding:10px;
  z-index:3;
`
const PrevButton = styled.div`
  ${button}
  left:0;
`

const NextButton = styled.div`
  ${button}
  right:0;
`

export default function Buttons(props) {
  const { index, total, loop, prevHandler, nextHandler } = props
  return (
    <Wrapper>
      { (loop || index !== 0) && (
        <PrevButton onClick={prevHandler}>◀</PrevButton>
      )}
      { (loop || index !== total - 1) && (
        <NextButton onClick={nextHandler}>▶</NextButton>
      )}
    </Wrapper>
  )
}
