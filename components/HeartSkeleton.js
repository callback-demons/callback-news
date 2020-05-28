/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width:100%;
`

const Path = styled.path`
  fill:${(p) => p.theme.skeleton.baseColor};
  stroke:${(p) => p.theme.skeleton.baseColorDark};
  stroke-width:1px;
`

function SvgHeartSkeleton(props) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 17.2 15.413"
      {...props}
    >
      <g data-name="Heart">
        <Path
          className={props.className}
          data-name="Heart-path"
          d="M15.415 1.91A4.356 4.356 0 0012.175.5a4.076 4.076 0 00-2.546.879A5.209 5.209 0 008.6 2.453a5.206 5.206 0 00-1.029-1.075A4.075 4.075 0 005.026.499a4.356 4.356 0 00-3.24 1.41A5.064 5.064 0 00.5 5.369a6.03 6.03 0 001.607 3.947 34.263 34.263 0 004.022 3.775c.557.475 1.189 1.013 1.845 1.587a.95.95 0 00.626.235.95.95 0 00.626-.235c.656-.574 1.288-1.112 1.846-1.587a34.256 34.256 0 004.022-3.775 6.029 6.029 0 001.607-3.947 5.063 5.063 0 00-1.286-3.459z"
        />
      </g>
    </Svg>
  )
}

export default SvgHeartSkeleton
