/* eslint-disable react/no-danger */
import React from 'react'
import styled from 'styled-components'
import ClampLines from 'react-clamp-lines'
import { card } from '../styled/mixins'
import useWidth from '../hooks/useWidth'

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
const Avatar = styled.img`
  max-width:100%;
  object-fit:cover;
  border-radius:50%;
`
const Info = styled.div`
  display:grid;
  grid-template-columns:30px 1fr;
  grid-column-gap:${(props) => props.theme.space}px;
`
const Meta = styled.div`
  grid-column-start:2;
  & span {
    margin-right:${(props) => props.theme.space * 3}px;
  }
`
const Author = styled.p`
  font-size:1.3rem;
  margin:0;
  padding:0;
`
const Footer = styled.div`
  grid-area:footer;
`

const PostItem = ({ post = {} }) => {
  const { containerRef, width } = useWidth()
  const decodedContent = decodeURIComponent(post.contentEncoded)
  return (
    <Container ref={containerRef} width={width}>
      <Label>
        <LabelElement>
          {post.category[0]}
        </LabelElement>
      </Label>
      <Image src={`https://i.picsum.photos/id/${Math.round(Math.random() * 150) + 1}/200/200.jpg`} />
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
        <Info>
          <Avatar src={`https://robohash.org/callback-${Math.floor(Math.random() * 1000)}`} />
          <Author>David Behar Lombrozo</Author>
          <Meta>
            <span>20 min read</span>
            <span>Posted: 28/04/20</span>
          </Meta>
        </Info>
      </Footer>
    </Container>
  )
}

export default PostItem
