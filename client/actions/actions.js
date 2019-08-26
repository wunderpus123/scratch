import * as types from "../constants/actionTypes";

//redux thunk: async to dispatch;
export const logInShowProjects = (credentials) => {
  //takes in a dispatch param
  return (dispatch) => {
    //fetch req here: 
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({credentials}),
    })
    .then(data => data.json())
    .then(task => {
      //here we would dispatch the action as we normally would:
      console.log('HERE IS THE TASK', task)
      dispatch({ type: types.LOG_IN_SHOW_PROJECTS, payload: { task } });
    })
    .catch(err => console.log('error:', err))
  }
};

//PRIORITY
export const addTask = (taskData) => {

  return (dispatch) => {
  fetch('/api/projects/task', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({taskData})
  })
  .then(data => data.json())
  .then(task => {
    console.log('RECEIVED TASK before dispatching', task)
    dispatch({ type: types.ADD_TASK, payload: task });
  })
  .catch(err => console.log('error:', err))
}
}

//PRIORITY
export const deleteTask = taskId => {
  fetch('/api/project/task', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( {id: taskId} )
  })
  .then(data => data.json())
  .then(results => {
    dispatch({ type: types.DELETE_TASK, payload: { results }})
  })
  .catch(err => console.log('error:', err))
}

export const updateTitle = (taskId, newTitle) => ({
  type: types.UPDATE_TITLE,
  payload: { taskId, newTitle }
});

export const updateOwner = (taskId, newOwner) => ({
  type: types.UPDATE_OWNER,
  payload: { taskId, newOwner }
});

export const updateStatus = (taskId, newStatus) => ({
  type: types.UPDATE_STATUS,
  payload: { taskId, newStatus }
});


export const addProject = projectName => ({
  type: types.ADD_PROJECT,
  payload: projectName
});
