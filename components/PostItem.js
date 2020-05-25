/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ClampLines from 'react-clamp-lines'
import { card } from '../styled/mixins'
import useWidth from '../hooks/useWidth'
import InfoPost from './InfoPost'

const Container = styled.div`
    ${card};
    padding:${(p) => p.theme.space * 2}px ${(p) => p.theme.space * 3}px;
    display: inline-grid;
    grid-template: auto;
    grid-auto-flow: row;
    grid-template-columns:100px 1fr;
    grid-template-areas: "label label"
                          "image title"
                          "description description"
                          "footer footer";
    grid-gap: 8px;
    margin:0 16px;
    ${(props) => props.width > 750 && `
    grid-template-columns:1fr 550px;
    grid-template-areas:"label label"
                        "image title"
                        "image description"
                        "footer footer";
    `}
`
const Label = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area:label;
`
const LabelElement = styled.div(
  (props) => {
    const { space } = props.theme
    return `
      background:#428CD4;
      color:white;
      padding:3px 15px;
      border-radius:15px;
      display:inline;
      margin:${space}px 0;
      margin-right:${space}px;
      box-sizing:border-box;
    `
  },
)
const Image = styled.img`
  object-fit:cover;
  width:100%;
  grid-area:image;
  max-height:200px;
`
const Description = styled(ClampLines)`
  grid-area:description;
  & div {
    font-size:1.2em;
    margin: ${(props) => props.theme.space * 2}px 0;
  }
`
const Title = styled(ClampLines)`
  grid-area:title;
  margin:0;
  & h3 {
    margin:0;
    color: ${(props) => props.theme.color.secondary};
    font-size:1.5rem;
  }
`
const Footer = styled.div`
  grid-area:footer;
`

const PostItem = ({ post = {} }) => {

  // author_name,
  // content,
  // created_at,
  // day_posted,
  // description,
  // likes_number,
  // title,
  const [category, setCategory] = useState('')
  useEffect(() => {
    async function fetchData() {
      const results = await fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/categories.json')
      const categories = await results.json()
      console.log(categories)
      setCategory(categories[Math.round(Math.random() * 7)] || {})
    }
    fetchData()
  }, [null])

  const { containerRef, width } = useWidth()
  const decodedContent = decodeURIComponent(post.content)
  return (
    <Container ref={containerRef} width={width}>
      <Label>
        <LabelElement>
          {category.name || ''}
        </LabelElement>
      </Label>
      <Image
      // src={post.imgSrc}
        alt={post.title}
      />
      <Title
        text={post.title}
        lines={3}
        ellipsis="..."
        innerElement="h3"
        buttons={false}
      />
      <Description
        text={decodedContent}
        lines={4}
        ellipsis="..."
        innerElement="div"
        buttons={false}
      />
      <Footer>
        <InfoPost post={post} />
      </Footer>
    </Container>
  )
}

export default PostItem
