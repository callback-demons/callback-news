import styled from 'styled-components'
import fetch from 'node-fetch'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import CommentsSection from '../components/CommentsSection'

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

function PostPage({ post = {}, id = null }) {
  const [postState, setPostState] = useState({ ...post } || {})
  // const { token = null } = user
  useEffect(() => {
    const fetchData = async () => {
      const token = window.localStorage.getItem('token') || ''
      const resPost = await fetch(`https://api.callback-news.com/news/${id}/`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token || ''}`,
        },
      })
      const data = await resPost.json()
      setPostState(data)
      console.log(data)

    }
    fetchData()
  }, [null])
  const media = postState.media[0] ? postState.media : [{}]
  const { url = 'https://storage.googleapis.com/cbn-public/default-backgroud.jpg', title = 'Callback news image' } = media[0]
  return (
    <Layout>
      <Image src={url} alt={title} />
      <PostCard post={postState} />
      <CommentsSection />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {
  const { id } = query
  try {
    const [resPost] = await Promise.all([
      fetch(`https://api.callback-news.com/news/${id}/`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': `Token ${token}`,
        },
      }),
    ])
    const post = await resPost.json()
    const { status: postStatus } = resPost

    if (postStatus === 404) {
      res.statusCode = postStatus
      return { props: { statusCode: res.statusCode } }
    }
    if (postStatus >= 500 && postStatus < 600) {
      res.statusCode = 503
      return { props: { statusCode: res.statusCode } }
    }
    res.statusCode = 200
    return { props: { post, statusCode: res.statusCode, id } }
  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }
}

export default PostPage
