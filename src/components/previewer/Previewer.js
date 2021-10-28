import marked from 'marked';
import './Previewer.scss';
import hljs from 'highlight.js';

export const Previewer = (props) => {
  
  marked.setOptions({
    breaks: true,
    langPrefix: "hljs language-",
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  
  return(
    <div id='preview' dangerouslySetInnerHTML={{ __html: marked(props.state.content) }}></div>
  )
}