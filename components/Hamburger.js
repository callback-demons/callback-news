import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 25px;
    height: 25px;
    display: none;
    transition: all 0.3s ease-in-out;
    display: block;
    cursor: pointer;
    & span {
        width: 25px;
        height: 3px;
        background-color: ${(props) => (props.color ? props.color : '#3f3f3f')};
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
    }
    & span{
        display: block;
        cursor: pointer;
    }
    & span:nth-child(2){
        opacity:${(props) => (props.isActive ? '0' : '1')};
    }
    & span:nth-child(1){
        transform:${(props) => (props.isActive ? 'translateY(8px) rotate(45deg)' : '')};
    }
    & span:nth-child(3){
        transform:${(props) => (props.isActive ? 'translateY(-8px) rotate(-45deg)' : '')};
    }
`
const Line = styled.span``

const HamburgerButton = (props) => {
  const { color, onClick, isActive } = props
  return (
    <Wrapper
      isActive={isActive}
      onClick={onClick}
      className={props.className}
      color={color}
    >
      <Line />
      <Line />
      <Line />
    </Wrapper>
  )
}

export default HamburgerButton
