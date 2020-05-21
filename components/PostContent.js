import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const PostContent = ({ contents }) => {
  return (
    <Container>
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
    </Container>
  )
}

export default PostContent
