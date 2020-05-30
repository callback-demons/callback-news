import styled from 'styled-components'
import fetch from 'node-fetch'
import Link from 'next/link'
import PostItemList from '../components/PostItemList'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'

const Container = styled.div`
  max-width:1032px;
  margin:0 auto;
  padding:${(props) => props.theme.space * 2}px;

`
const ErrorWrapper = styled.section``
const ErrorCode = styled.h1`
  font-size:152px;
  margin:0;
  text-align:left;
  font-family: ${(props) => props.theme.fontFamilyText};
`
const ErrorDescription = styled.h2`
  font-size:38px;
  margin:0;
  text-align:left;
  font-family: ${(props) => props.theme.fontFamilyText};
`
const PostsWrapper = styled.section`
  background:#fafafa;
`

const Search = styled.div`
  padding-top:60px;
`

const Paragraph = styled.p`
  color:${(props) => props.theme.color.ultraGray};
`

const Error = ({ categories, posts, statusCode }) => {
  const heroNews = posts ? [posts[1], posts[2], posts[3]] : []
  const errors = [
    {
      code: 404,
      description: 'We couldn’t find this page.',
      message: 'Maybe it’s out there, somewhere...',
      displayPosts: true,
      displayHome: true,
      displaySearch: true,
    },
    {
      code: 503,
      description: 'We are having troubles now.',
      message: 'Please try again later',
    },
  ]
  const error = errors
    .filter((e) => e.code === statusCode)
    .reduce((_, current) => current)

  return (
    <Layout title={`Error: ${statusCode}`}>
      <ErrorWrapper>
        <Container>
          <ErrorCode>{statusCode}</ErrorCode>
          <ErrorDescription>
            {
              error.description
            }
          </ErrorDescription>
          {
            error.displaySearch && (
              <Search>
                <SearchBar />
              </Search>
            )
          }
          <Paragraph>{error.message}</Paragraph>
          {
            error.displayHome && (
              <Paragraph>
                You can always find insightful news on our
                {' '}
                <Link href="/">
                  <a>
                    homepage.
                  </a>
                </Link>
              </Paragraph>
            )
          }
        </Container>
      </ErrorWrapper>
      {
        error.displayPosts && (
          <PostsWrapper>
            <Container>
              <PostItemList
                title="Maybe you're interested in..."
                posts={heroNews}
                maxWidth="300px"
              />
            </Container>
          </PostsWrapper>
        )
      }

    </Layout>
  )
}

export async function getStaticProps({ query, res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  try {
    const [resPosts] = await Promise.all([
      fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/news.json'),
    ])

    const posts = await resPosts.json()
    return { props: { posts, statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default Error
