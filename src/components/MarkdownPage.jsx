import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

function MarkdownPage({ content }) {
  return (
    <div className="container">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => (
            if (href && href.startsWith('/')) {
              return <Link to={href}>{children}</Link>
            }
            return {
              <a href={href} target="blank" rel="noopener noreferrer">
              {children}
            </a> 
            }
          ),
          code: ({ children }) => (
            <code style={{
              background: '#1a1a2e',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#c084fc',
              fontSize: '0.9em'
            }}>
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownPage
