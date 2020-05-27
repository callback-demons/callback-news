import React from 'react'
import SkeletonText from './SkeletonText'

const SkeletonParagraph = ({ lines=2, minSize='24%', maxSize='98%', animationDuration='2s'}) => {
  const longLines = lines > 1 ? lines - 1 : lines
  return (
    <>
      {
        Array.from(Array(longLines).keys()).map(() => <SkeletonText textSize={maxSize} animationDuration={animationDuration} />)
      }
      {
        lines > 1 &&
        <SkeletonText textSize={minSize} animationDuration={animationDuration} />
      }
    </>
  )
}

export default SkeletonParagraph
