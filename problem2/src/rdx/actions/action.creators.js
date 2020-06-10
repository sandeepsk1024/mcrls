import Actions from ".";

export default {
  UI: {
    createAction_activateTab: tabIndex => ({
      type: Actions.types.UI.ACTIVATE_TAB,
      payload: { tabIndex }
    })
  },
  TASKS: {
    createAction_createTask: newTaskName => ({
      type: Actions.types.TASKS.CREATE_TASK,
      payload: { newTaskName }
    }),
    createAction_markTaskAsComplete: completedTask => ({
      type: Actions.types.TASKS.MARK_TASK_COMPLETE,
      payload: { completedTask }
    })
  }
};
