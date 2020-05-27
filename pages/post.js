import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import CommentsSection from '../components/CommentsSection'

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

function PostPage({ post = {} }) {
  const { media = {} } = post
  const { url: imgSrc = '', title: imgTitle = '' } = media[0]
  return (
    <Layout>
      <Image src={imgSrc} alt={imgTitle} />
      <PostCard post={post} />
      <CommentsSection />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  // const { id } = query
  try {
    const resPost = await fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/new.json')
    const post = await resPost.json()
    res.statusCode = 200
    return { props: { post, statusCode: res.statusCode } }
  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }
}

export default PostPage
