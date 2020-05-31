import React from 'react'
import Carousel from 're-carousel'
import styled from 'styled-components'
import HeroElement from './HeroElement'
import HeroElementSkeleton from './HeroElementSkeleton'
import IndicatorDots from './IndicatorDots'
import CarouselButtons from './CarouselButtons'
import useLoading from '../../hooks/useLoading'

const CustomHeroElement = styled(HeroElement)`
  height:500px;
`
const Container = styled.div`
  height:500px;
  z-index:1;
  position: relative;
  & div div {
    z-index:1;
  }
`

const Hero = ({ className, posts = [] }) => {
  const [isLoading, setIsLoading] = useLoading()
  if (isLoading) {
    return <HeroElementSkeleton />
  }
  return (
    <Container styles={{ height: '500px' }}>
      <Carousel
        widgets={[CarouselButtons, IndicatorDots]}
        className={className}
        // auto
        loop
      >
        {posts.map(
          (post) => <CustomHeroElement
            onLoaded={() => { setIsLoading(false) }}
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
