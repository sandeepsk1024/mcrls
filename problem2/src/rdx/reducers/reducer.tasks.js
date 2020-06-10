import Actions from "../actions";
const initialTasksState = {
  list: [
    {
      id: 1,
      task: "Buy spices",
      isCompleted: false
    },
    {
      id: 2,
      task: "Read ReactJS",
      isCompleted: false
    },
    {
      id: 3,
      task: "Read Angular",
      isCompleted: false
    },
    {
      id: 4,
      task: "Go for run",
      isCompleted: false
    },
    {
      id: 5,
      task: "Chop and cook",
      isCompleted: false
    }
  ]
};

const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case Actions.types.TASKS.CREATE_TASK:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list[state.list.length - 1]
              ? state.list[state.list.length - 1].id + 3
              : 1,
            task: action.payload.newTaskName,
            isCompleted: false
          }
        ]
      };
    case Actions.types.TASKS.MARK_TASK_COMPLETE:
      return {
        ...state,
        list: [
          ...state.list.filter(t => t.id !== action.payload.completedTask.id),
          {
            id: action.payload.completedTask.id,
            task: action.payload.completedTask.task,
            isCompleted: true
          }
        ]
      };
    default:
      return {
        ...state
      };
  }
};

export default tasksReducer;
