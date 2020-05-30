import styled from 'styled-components'

const Separator = styled.hr`
  width: 98%;
  color: white;
  height: 1px;
  border: none;
  /* margin: 5px 20px; */
  background-color: white;
  border-top: 6px dotted ${(p) => p.theme.skeleton.baseColorDark};
`

function DottedLine({ width = '98%', size = '6px' }) {
  return (
    <Separator />
  )
}

export default DottedLine
