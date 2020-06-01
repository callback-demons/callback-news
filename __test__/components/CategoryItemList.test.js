import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import CategoryItemList from '../../components/CategoryItemList'
import categories from '../../mocks/categories.json'
import CategoryItem from '../../components/CategoryItem'
import Layout from '../../components/Layout'
import lightTheme from '../../styled/themes/light'

describe('<CategoryItemList />', () => {

  const categoryItemList = mount(
    <ThemeProvider theme={lightTheme}>
      <CategoryItemList data={categories} />
    </ThemeProvider>,
  )

  it('Should load the CategoryItemList component', () => {
    expect(categoryItemList.length).toEqual(1)
  })

  it('Should load a CategoryItem component with data', () => {
    expect(
      categoryItemList.containsMatchingElement(
        <CategoryItem />,
      ),
    ).toBeTruthy()

  })

  it('Should load a CategoryItem component with data', () => {
    expect(
      categoryItemList.containsMatchingElement(
        <CategoryItem
          title="UX/UI"
          srcImage="https://storage.googleapis.com/cbn-public/users/pictures/ux-pexels-photo-196644.jpeg?Expires=1590992269&GoogleAccessId=storage%40callback-demons.iam.gserviceaccount.com&Signature=WsVdOBMqEydbHFIqKfMpqnXgUDeL6MUJOuYaoLy4M908peMMZwYtKFTI%2FfkPa5BHNofirsFKM5FnyZpRuHxnrvb44ELu3KdMpveNGHfZO7e2R72%2Fxt6Yb%2Bf4v3uW84JlS3qTFliZeBRGOQLsUR8mOLdt2PGwBT9boqhjTJptxUC8YRuBnYZ3X%2BWvniL2w8mAcSA4X9z1VrfmCLb1l%2BMtIYBrZrJj9VeMIuFOFZfayY01ZNMhpKk2YPryO76W5MacrZ0vtHWRjJThlvCKczWjfPUD%2F8HT109x4SuTMRirfyOp6x%2FznA%2Fbvb9O%2Buwpv4H5eEiYfX3%2F1DgIHmGYdpXixQ%3D%3D"
          categoryColor="#294AFC"
          id={5}
          key={5}
        />,
      ),
    ).toBeTruthy()
  })

  it('Should load exactly the quantity of CategoryItem that is defined by the data', () => {
    // expect(categoryItemList.find(CategoryItem))
    //   .to.have
    //   .lengthOf(categories.length)
  })

})
