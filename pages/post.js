import styled from 'styled-components'
import mockPost from '../utils/mocks/post.json'
import PostContent from '../components/PostContent'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

const { contents = [] } = mockPost
const Image = styled.img``

export default function PostPage() {
  return (
    <Layout>
      <Image src={`https://i.picsum.photos/id/${Math.round(Math.random() * 150) + 1}/200/200.jpg`} />
      <PostCard contents={contents} />
    </Layout>
  )
}

