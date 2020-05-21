import mockPost from '../utils/mocks/post.json'

const { contents = [] } = mockPost

export default function PostPage() {
  return (
    <>
      {
        contents.map((node) => {
          console.log(node)
          switch (node.type) {
            case 'p':
              return <p>{node.content}</p>
            case 'a':
              return <a href={node.href}>{node.content}</a>
          }
        })
      }
    </>
  )
}

