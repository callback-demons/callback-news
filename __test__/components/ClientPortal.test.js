import React from 'react'
import { shallow } from 'enzyme'
import ClientPortal from '../../components/ClientPortal'
import Layout from '../../components/Layout'

describe('<ClientPortal />', () => {
  const clientPortal = shallow(
    <Layout>
      <ClientPortal />
    </Layout>,
  )

  it('Should load the ClientPortal component', () => {
    // ReactDOM.createPortal = jest.fn((modal) => modal)

    expect(clientPortal.length).toEqual(1)
  })
})
