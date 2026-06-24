import MarkdownPage from '../components/MarkdownPage.jsx'
import aboutContent from '../content/about.md?raw'

function About() {
  return <MarkdownPage content={aboutContent} />
}

export default About 
