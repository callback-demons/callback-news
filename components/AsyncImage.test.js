import React from 'react'
import { mount } from 'enzyme'
import AsyncImage from './AsyncImage'

describe('<AsyncImage />', () => {
  it('Should load the AsyncImage component', () => {
    const image = mount(<AsyncImage />)
    expect(image.length).toEqual(1)
  })
})
