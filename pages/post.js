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

function PostPage({ post = {}, comments = [] }) {
  const media = post.media[0] ? post.media : [{}]
  const { url = 'https://storage.googleapis.com/cbn-public/default-backgroud.jpg', title = 'Callback news image' } = media[0]
  return (
    <Layout>
      <Image src={url} alt={title} />
      <PostCard post={post} />
      <CommentsSection comments={comments} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  const { id } = query
  try {
    const [resPost, resComments] = await Promise.all([
      fetch(`https://api.callback-news.com/news/${id}/`),
      fetch(`https://api.callback-news.com/news/${id}/comments/`),
    ])
    const post = await resPost.json()
    const { status: postStatus } = resPost
    const comments = await resComments.json()
    if (postStatus === 404) {
      res.statusCode = postStatus
      return { props: { statusCode: res.statusCode } }
    }
    if (postStatus >= 500 && postStatus < 600) {
      res.statusCode = 503
      return { props: { statusCode: res.statusCode } }
    }
    res.statusCode = 200
    return { props: { post, comments, statusCode: res.statusCode } }
  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default PostPage
