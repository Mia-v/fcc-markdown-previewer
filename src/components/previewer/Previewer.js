import marked from 'marked';

export const Previewer = (props) => {

  const markDownValue = marked(props.state.content);
  marked.setOptions({
    breaks: true,
  });

  return(
    <div id='preview' dangerouslySetInnerHTML={{ __html: markDownValue }}></div>
  )
}