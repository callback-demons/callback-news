/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

const AsyncImage = (props) => (
  <img
    {...props}
    className={props.className}
    alt={props.alt}
    src={props.src}
    ref={(element) => {
      if (!element) { return }
      const img = element
      img.onload = () => props.onLoaded()
      if (img.complete) props.onLoaded()
    }}
  />
)

export default AsyncImage
