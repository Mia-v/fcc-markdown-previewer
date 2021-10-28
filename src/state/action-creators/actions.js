export const changeContent = (content) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGECONTENT',
      payload: content
    })
  }
}