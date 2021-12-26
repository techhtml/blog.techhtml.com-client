import { marked } from 'marked';

interface MDViewerProps {
  title: string;
  contents: string;
}

export const MDViewer = ({ title, contents }: MDViewerProps) => {
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={
        { __html: marked(contents)}
      } />
    </article>
  )
}