import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import CategoryItem from '../../components/CategoryItem'
import lightTheme from '../../styled/themes/light'

describe('<CategoryItem />', () => {
  const categoryItem = mount(
    <ThemeProvider theme={lightTheme}>
      <CategoryItem />
    </ThemeProvider>,
  )
  it('Should load the CategoryItem component', () => {
    expect(categoryItem.length).toEqual(1)
  })
})
