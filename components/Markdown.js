import ReactMarkdown from 'react-markdown'
// import './Markdown.scss'

const Markdown = ({ text }) => {
  return (
    <div className="Markdown">
      <ReactMarkdown
        source={text}
        escapeHtml={false}
      />
    </div>
  )
}

export default Markdown
