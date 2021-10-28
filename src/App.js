import './App.css';
import Editor from './components/editor/Editor'; 
import { Previewer } from './components/previewer/Previewer';
import { useSelector, useDispatch } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { changeContent } from './state/action-creators/actions';

function App() {
  const state = useSelector( (state) => state);
  const dispatch = useDispatch();
  bindActionCreators(changeContent, dispatch);
  
  return (
    <div className="App">
      <Editor state={state} />
      <Previewer state={state} />
    </div>
  );
}

export default App;
