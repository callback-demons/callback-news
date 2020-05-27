import React from 'react'
import styled from 'styled-components'
import { skeletonGradient } from '../styled/mixins'

const Content = styled.div`
	margin: 8px;
	margin-bottom: 2px;
	width: ${(p) => p.textSize};
	height: ${(p) => p.theme.tabletSize}px;
	${(p) => skeletonGradient(p.theme.skeleton.baseColor, p.theme.skeleton.shineColor, p.animationDuration, '-300px')};
	@media screen and (min-width: 768px) {
		height: ${(p) => p.theme.titleSize}px;
	}
`

const SkeletonText = ({ textSize, animationDuration='2s'}) => <Content textSize={textSize} animationDuration={animationDuration} />

export default SkeletonText