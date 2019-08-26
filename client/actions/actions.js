import * as types from "../constants/actionTypes";

export const logInShowProjects = (credentials) => {
  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {credentials} ),
    })
    .then((data) => {
      // dispatch({ type: types.LOG_IN_SHOW_PROJECTS, payload: { credentials } });
      console.log(data);
    })
    .catch(err => console.log('error:', err))
  }
};


export const addTask = (title, owner) => ({
  type: types.ADD_TASK,
  payload: { title, owner }
});

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

export const deleteTask = taskId => ({
  type: types.DELETE_TASK,
  payload: taskId
});

export const addProject = projectName => ({
  type: types.ADD_PROJECT,
  payload: projectName
});
