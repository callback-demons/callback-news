import React from 'react'
import { mount } from 'enzyme'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import Layout from '../../components/Layout'

const Title = styled.h1``

describe('<Layout />', () => {
  const children = <div>This is a children</div>
  const myTitle = 'Hello Test'

  const layout = mount(
    <Layout title={myTitle}>
      {children}
    </Layout>,
  )

  it('Should load the Layout component', () => {
    const emptyLayout = mount(
      <Layout />,
    )
    expect(emptyLayout.length).toEqual(1)
  })

  it('Should load the Layout component with children', () => {
    expect(
      layout.containsMatchingElement(children),
    ).toBeTruthy()
  })

  it('Should load a title', () => {
    // const tree = renderer
    //   .create(
    //     <Layout title={myTitle}>
    //       {children}
    //     </Layout>,
    //   )
    //   .toJSON()
    console.log('myTitle', myTitle)
    // console.log('tree.children', JSON.stringify(tree.children))
    // console.log('tree.children', JSON.stringify(tree.children).includes(myTitle))
    expect(layout.props().title).toEqual(myTitle)

    // console.log(JSON.stringify(layout))
    // expect(JSON.stringify(layout).includes(myTitle)).toBe(true)
  })

})
