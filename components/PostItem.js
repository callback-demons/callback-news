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
  width: 100%;
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.55);
  border-radius: 25px;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:260px 96px 45px;
  grid-template-areas:"header"
                      "content"
                      "footer";
  grid-gap: 8px;
  overflow:hidden;
  padding-bottom:${(props) => props.theme.space * 2}px;
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
  height:200px;
  border-radius:25px 25px 0 0;
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
      margin: 170px 0;
      position:absolute;
    `
  },
)

const Header = styled.div`
  width:100%;
  grid-area:header;
  &:hover>a>div>h3{
    color: ${(props) => props.theme.color.secondary};
  }
`

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
    color: ${(props) => props.theme.color.primary};
    margin-bottom:${(props) => props.theme.space * 2}px;
    font-size:1.5rem;
    padding:0 ${(props) => props.theme.space * 2}px;
  }
`
const Footer = styled.div`
  grid-area:footer;
  padding:0 ${(props) => props.theme.space * 2}px;
  bottom:0;
  display:relative;
`
const Content = styled.div`
  padding:0 ${(props) => props.theme.space * 2}px;
  grid-area:content;
`

const PostItem = ({ post = {}, className }) => {
  const [isLoading, setIsLoading] = useLoading()
  const { containerRef, width } = useWidth()
  if (!post.id) {
    return <PostItemSkeleton />
  }

  if (post.id) {
    if (isLoading) {
      return <PostItemSkeleton />
    }

    return (
      <Container className={className} ref={containerRef} width={width}>
        <Header>
          <Label>
            <LabelElement>{post.category.name || ''}</LabelElement>
            {/* {
              post.categories.map((category) => <LabelElement>{category.name || ''}</LabelElement>)
            } */}
          </Label>
          <>
            <Link href={`/post/${post.id}`}>
              <a>
                <Image
                  onLoaded={() => { setIsLoading(false) }}
                  alt={post.title || 'defaultImage'}
                  src={post.media[0] ? post.media[0].url : 'https://storage.googleapis.com/cbn-public/default-backgroud.jpg'}
                />
                <Title
                  text={post.title || 'Title not available'}
                  lines={2}
                  ellipsis="..."
                  innerElement="h3"
                  buttons={false}
                />
              </a>
            </Link>
          </>
        </Header>
        <Content>
          <Description
            text={post.description || 'Description not available'}
            lines={3}
            ellipsis="..."
            innerElement="div"
            buttons={false}
          />
        </Content>
        <Footer>
          <InfoPost post={{
            postId: post.id,
            date: post.date_posted,
            author: post.author,
            likes: post.likes.count,
            liked: post.likes.liked,
            avatar: null,
          }}
          />
        </Footer>
      </Container>

    )
  }
}

export default PostItem
