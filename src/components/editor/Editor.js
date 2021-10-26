import React, {useState} from 'react';
import marked from 'marked';

export const Editor = () =>{
  const [state, setState] = useState();

  
  const handleChange = (e) => {
    const markDownValue = e.target.value;
    setState(marked(markDownValue));

  }

  return(
    <div>
    <textarea id="editor" onChange={handleChange}></textarea>
    <div dangerouslySetInnerHTML={{ __html: state }} />
    </div>
  )
}

