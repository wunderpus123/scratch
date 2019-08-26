import * as types from "../constants/actionTypes";

const initialState = {
  username: "",
  projectsList: [{ id: 1, name: "Daily" }],
  tasksList: [
    { id: 1, title: "Get shit done", owner: "Everyone", status: "todo" }
  ],
  lastProjectId: 1,
  lastTaskId: 1
};

const tasksReducer = (state = initialState, action) => {
  let tasksList;
  let taskId;

  switch (action.type) {
    case types.ADD_TASK:
      let lastTaskId = state.lastTaskId + 1;

      const newTask = {
        id: lastTaskId,
        title: action.payload.title,
        owner: action.payload.owner,
        status: "todo"
      };

      tasksList = state.tasksList.slice();
      tasksList.push(newTask);

      return {
        ...state,
        tasksList,
        lastTaskId
      };

    case types.UPDATE_TITLE:
      taskId = action.payload.taskId;
      let newTitle = action.payload.newTitle;
      Object.assign(tasksList, state.tasksList);
      tasksList.forEach(function(task) {
        if (task.taskId === taskId) {
          task.title = newTitle;
        }
      });

      return {
        ...state,
        tasksList
      };

    case types.UPDATE_OWNER:
      taskId = action.payload.taskId;
      let newOwner = action.payload.newOwner;
      Object.assign(tasksList, state.tasksList);
      tasksList.forEach(function(task) {
        if (task.taskId === taskId) {
          task.owner = newOwner;
        }
      });

      return {
        ...state,
        tasksList
      };

    case types.UPDATE_STATUS:
      taskId = action.payload.taskId;
      let newStatus = action.payload.newStatus;
      Object.assign(tasksList, state.tasksList);
      tasksList.forEach(function(task) {
        if (task.taskId === taskId) {
          task.status = newStatus;
        }
      });

      return {
        ...state,
        tasksList
      };

    case types.DELETE_TASK:
      taskId = action.payload;
      Object.assign(tasksList, state.tasksList);
      tasksList.filter(task => task.taskId !== taskId);

      return {
        ...state,
        tasksList
      };

    case types.ADD_PROJECT:
      let projectsList;
      let lastProjectId = state.lastProjectId + 1;
      Object.assign(projectsList, state.projectsList);

      const newProject = {
        id: projectId,
        name: action.payload
      };

      projectsList.push(newProject);

      return {
        ...state,
        lastProjectId,
        projectsList
      };

    default:
      return state;
  }
};

export default tasksReducer;
