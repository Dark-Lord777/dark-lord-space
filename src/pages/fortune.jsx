import MarkdownPage from '../components/MarkdownPage.jsx'
import fortuneContent from '../content/fortune.md?raw'

function Fortune() {
  return <MarkdownPage content={fortuneContent} />
}

export default Fortune
