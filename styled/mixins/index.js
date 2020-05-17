/* eslint-disable import/prefer-default-export */

export const card = `
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.25);
  border-radius: 25px;
`

export const circle = `
  border-radius: 50%;
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.25);
`
export const transitions = `
  transition: 0.4s;
`

export const circleGradientAnimation = (idleColor, initialColor, lastColor, transitionTime = 0) => `
  clip-path: circle(50% at 50% 50%);
  background-size: 100%;
  background-image: linear-gradient(${idleColor}, ${idleColor});
  position: relative;
  z-index: 100;
  &:before {
    background-image: linear-gradient(${initialColor}, ${lastColor});
    content: '';    
    display: block;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity ${transitionTime};
  }
  &:hover {
    cursor: pointer;
    &:before {
      opacity: 1;
    }
  }
`
