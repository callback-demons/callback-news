import styled from 'styled-components'
import mockPost from '../utils/mocks/post.json'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import CommentInput from '../components/CommentInput'

const { imageSrc = '' } = mockPost
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

export default function PostPage() {
  return (
    <Layout>
      <Image src={imageSrc} />
      <PostCard post={mockPost} />
      <CommentInput
        placeholder="Add your comment"
        rows={1}
        handleClick={null}
        buttonText="Comment"
      />
    </Layout>
  )
}

