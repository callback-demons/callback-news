import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import CircleSkeleton from '../../components/CircleSkeleton'
import lightTheme from '../../styled/themes/light'

describe('<CircleSkeleton />', () => {
  const circleSkeleton = mount(
    <ThemeProvider theme={lightTheme}>
      <CircleSkeleton />
    </ThemeProvider>,
  )
  it('Should load the CircleSkeleton component', () => {
    expect(circleSkeleton.length).toEqual(1)
  })
})
