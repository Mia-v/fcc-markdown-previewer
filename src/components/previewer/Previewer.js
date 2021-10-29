import marked from 'marked';
import './Previewer.scss';


export const Previewer = (props) => {
  
  marked.setOptions({
    breaks: true
  });
  
  return(
    <div id='preview' dangerouslySetInnerHTML={{ __html: marked(props.state.content) }}></div>
  )
}