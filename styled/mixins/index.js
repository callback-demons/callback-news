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
export const boxShadow = `
  box-shadow: 6px 6px 18px -9px rgba(0,0,0,0.54);
`

export const bigBoxShadow = `
  box-shadow: 8px 8px 23px -6px rgba(0,0,0,0.54);
`

export const inputShadow = `
  border: none;
  box-shadow: 0px 0px 12px -6px rgba(0,0,0,0.54);
`

export const skeletonGradient = (baseColor, shineColor, animationDuration, skeletonOffset) => `
  background-image: linear-gradient(90deg, ${baseColor} 0px, ${shineColor} 100px, ${baseColor} 200px);
  background-size: 600px;
  animation: shine ${animationDuration} infinite linear;
  @keyframes shine{
    0% {
      background-position: -200px ${skeletonOffset};
    }
    40%, 100% {
      background-position: 300px ${skeletonOffset};
    }
  }
`

export const circleGradientAnimation = (idleColor, initialColor, lastColor, transitionTime = 0) => `
  clip-path: circle(50% at 50% 50%);
  background-size: 100%;
  background-image: linear-gradient(${idleColor}, ${idleColor});
  position: relative;
  z-index: 9;
  &:before {
    background-image: linear-gradient(to bottom right, ${initialColor}, ${lastColor});
    content: '';    
    display: block;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    opacity: 0;
    width: 100%;
    z-index: 8;
    transition: opacity ${transitionTime};
  }
  &:hover {
    cursor: pointer;
    &:before {
      opacity: 1;
      animation: ringRotateAnimation ${transitionTime};
    }
  }
  @keyframes ringRotateAnimation {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }
`
