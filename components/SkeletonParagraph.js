import React from 'react'
import SkeletonText from './SkeletonText'

const SkeletonParagraph = ({
  lines = 2,
  minSize = '24%',
  maxSize = '98%',
  animationDuration = '2s',
  height,
}) => {
  const longLines = lines > 1 ? lines - 1 : lines
  return (
    <>
      {
        Array.from(Array(longLines).keys()).map(() => (
          <SkeletonText
            textSize={maxSize}
            animationDuration={animationDuration}
            height={height}
          />
        ))
      }
      {
        lines > 1 &&
        <SkeletonText
          textSize={minSize}
          animationDuration={animationDuration}
          height={height}
        />
      }
    </>
  )
}

export default SkeletonParagraph
