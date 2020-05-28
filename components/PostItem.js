/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-danger */
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ClampLines from 'react-clamp-lines'
import useWidth from '../hooks/useWidth'
import InfoPost from './InfoPost'
import PostItemSkeleton from './PostItemSkeleton'
import AsyncImage from './AsyncImage'
import useLoading from '../hooks/useLoading'

const Container = styled.div`
  & a {
    color:${(props) => props.theme.color.ultraBlack};
    &:hover {
      text-decoration:none;
      color:${(props) => props.theme.color.secondary};
    }
  }
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.55);
  border-radius: 25px;
  grid-gap: 8px;
  margin:0 16px;
  overflow:hidden;
  ${(props) => props.width > 750 && `
  grid-template-columns:1fr 550px;
  grid-template-areas:"label label"
                      "image title"
                      "image description"
                      "footer footer";
  `}
`

const Image = styled(AsyncImage)`
  object-fit:cover;
  width:100%;
  grid-area:image;
  max-height:200px;
`
const Label = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area:label;
  position: static;
  margin-top:-45px;
`

const LabelElement = styled.div(
  (props) => {
    const { space, color } = props.theme
    return `
      background:${color.primary};
      color:white;
      padding:3px 30px;
      border-radius:5px;
      display:inline;
      margin:${space}px 0;
      text-align:center;
      min-width:140px;
    `
  },
)

const Description = styled(ClampLines)`
  grid-area:description;
  margin-bottom:${(props) => props.theme.space * 2}px;
  & div {
    margin: ${(props) => props.theme.space * 1}px 0;
  }
`
const Title = styled(ClampLines)`
  grid-area:title;
  margin:0;
  & h3 {
    margin:0;
    /* color: ${(props) => props.theme.color.secondary}; */
    margin-bottom:${(props) => props.theme.space * 2}px;
    font-size:1.5rem;
  }
`
const Footer = styled.div`
  grid-area:footer;
  padding:0 ${(props) => props.theme.space * 2}px;
  bottom:0;
  display:relative;
`

const PostItem = ({ post = {} }) => {
  const [isLoading, setIsLoading] = useLoading()
  const { containerRef, width } = useWidth()
  if (!post.id) {
    return <PostItemSkeleton />
  }

  if (post.id) {

    const decodedContent = post ? decodeURIComponent(post.content) : ''

    if (isLoading) {
      return <PostItemSkeleton />
    }

    return (
      <Container ref={containerRef} width={width}>
        <Label>
          {
            post.categories.map((category) => <LabelElement>{category.name || ''}</LabelElement>)
          }
        </Label>
        <>
          <Link href={`/post/${post.id}`}>
            <a>
              <Image
                onLoaded={() => { setIsLoading(false) }}
                alt={post.title}
                src={post.media[0].url}
              />
              <Title
                text={post.title}
                lines={2}
                ellipsis="..."
                innerElement="h3"
                buttons={false}
              />
            </a>
          </Link>
        </>
        <Description
          text={decodedContent}
          lines={3}
          ellipsis="..."
          innerElement="div"
          buttons={false}
        />
        <Footer>
          <InfoPost post={{
            date: post.created_at,
            author: post.author_name,
            likes: post.likes_number,
            avatar: null,
          }}
          />
        </Footer>
      </Container>

    )
  }
}

export default PostItem
