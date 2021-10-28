import { connect } from 'react-redux';
import './Editor.scss';

const Editor = (props) =>{
  return(
    <div>
    <textarea id="editor" defaultValue={props.state.content} onChange={props.onChangeContent}></textarea>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    content: state.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeContent: (e) => {
      const action = {type: 'CHANGECONTENT', payload: e.target.value};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
