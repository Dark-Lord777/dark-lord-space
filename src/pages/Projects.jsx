import MarkdownPage from '../components/MarkdownPage.jsx'
import projectsContent from '../content/projects.md?raw'

function Projects() {
  return <MarkdownPage content={projectsContent} />
}

export default Projects 
