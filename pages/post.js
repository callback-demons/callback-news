import styled from 'styled-components'
import fetch from 'node-fetch'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import CommentInput from '../components/CommentInput'
import Comment from '../components/Comment'

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h2`
  margin: 40px 60px;
  font-size: 28px;
  font-family: ${(props) => props.theme.fontFamilyTitle};
`
const testComment = "Comentario de Prueba - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"

function PostPage({ post = {} }) {
  const { media = {} } = post
  const { url: imgSrc = '', title: imgTitle = '' } = media[0]
  return (
    <Layout>
      <Image src={imgSrc} alt={imgTitle} />
      <PostCard post={post} />
      <Title>Comments</Title>
      <CommentInput
        placeholder="Add your comment"
        rows={2}
        handleClick={null}
        buttonText="Comment"
      />
      {
        Array.from(Array(5).keys()).map(() => <Comment text={testComment} />)
      }
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
