import React from 'react'
import Carousel from 're-carousel'
import styled from 'styled-components'
import HeroElement from './HeroElement'
import IndicatorDots from './carousel/IndicatorDots'
import CarouselButtons from './carousel/CarouselButtons'

const CustomHeroElement = styled(HeroElement)`
  height:500px;
`
const Container = styled.div`
  height:500px;
`

const Hero = ({ className, posts = [] }) => {
  return (
    <Container styles={{ height: '500px' }}>
      <Carousel
        widgets={[CarouselButtons, IndicatorDots]}
        className={className}
        auto
        loop
      >
        {posts.map(
          (post) => <CustomHeroElement
            styles={{ height: '500px' }}
            key={post.id}
            post={post}
            height="100vh"
          />,
        )}
      </Carousel>
    </Container>
  )
}

export default Hero
