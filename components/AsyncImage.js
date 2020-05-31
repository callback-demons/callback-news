/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

const AsyncImage = (props) => {
  const { onLoaded } = props
  return (
    <img
      {...props}
      alt={props.alt}
      src={props.src}
      ref={(element) => {
        if (!element) { return }
        const img = element
        // img.onload = () => onLoaded && onLoaded()
        if (img.complete && onLoaded) onLoaded()
      }}
    />
  )
}

export default AsyncImage
