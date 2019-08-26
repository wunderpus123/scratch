import * as types from "../constants/actionTypes";

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

export const updateStatus = (taskId, newStatus) => {
  console.log("task ", taskId);
  console.log("stat ", newStatus);
  return {
    type: types.UPDATE_STATUS,
    payload: { taskId, newStatus }
  };
};

export const deleteTask = taskId => ({
  type: types.DELETE_TASK,
  payload: taskId
});

export const addProject = projectName => ({
  type: types.ADD_PROJECT,
  payload: projectName
});
