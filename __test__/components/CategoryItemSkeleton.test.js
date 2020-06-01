import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import CategoryItemSkeleton from '../../components/CategoryItemSkeleton'
import Layout from '../../components/Layout'
import lightTheme from '../../styled/themes/light'

describe('<CategoryItemSkeleton />', () => {
  const categoryItemSkeleton = mount(
    <ThemeProvider theme={lightTheme}>
      <CategoryItemSkeleton />
    </ThemeProvider>,
  )
  it('Should load the CategoryItemSkeleton component', () => {
    expect(categoryItemSkeleton.length).toEqual(1)
  })
})
