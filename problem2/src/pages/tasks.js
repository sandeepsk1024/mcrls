import React from "react";
import Tabs from "../components/Tabs";
import TaskAdder from "../components/Tasks/tasks.add";
import TasksList from "../components/Tasks/tasks.list";

import { useDispatch, useSelector } from "react-redux";
import Actions from "../rdx/actions";

export default function TasksPage() {
  const dispatch = useDispatch();

  const selectedTabIndex = useSelector(state => state.ui.activeTabIndex);
  const upcomingTasks = useSelector(state =>
    state.tasks.list.filter(t => t.isCompleted === false)
  );
  const completedTasks = useSelector(state =>
    state.tasks.list.filter(t => t.isCompleted === true)
  );
  return (
    <>
      <Tabs
        tabs={["Upcoming tasks", "Completed tasks"]}
        selectedTabIndex={selectedTabIndex}
        onChange={changedTabIndex => {
          dispatch(
            Actions.creators.UI.createAction_activateTab(changedTabIndex)
          );
        }}
      >
        {selectedTabIndex === 0 && (
          <>
            <TasksList
              tasks={upcomingTasks}
              markAsComplete={completedTask => {
                dispatch(
                  Actions.creators.TASKS.createAction_markTaskAsComplete(
                    completedTask
                  )
                );
              }}
            />
            <TaskAdder
              onAdd={t => {
                dispatch(Actions.creators.TASKS.createAction_createTask(t));
              }}
            />
          </>
        )}
        {selectedTabIndex === 1 && <TasksList tasks={completedTasks} />}
      </Tabs>
    </>
  );
}
