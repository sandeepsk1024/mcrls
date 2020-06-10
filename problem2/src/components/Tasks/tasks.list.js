import React from "react";
import Task from "./task";
import { STaskListContainer, SCompletedTask, SUpcomingTask } from "./styles";

const TasksList = ({ tasks, markAsComplete }) => {
  return (
    <STaskListContainer>
      {tasks.map(t =>
        t.isCompleted ? (
          <SCompletedTask key={t.id} onClick={() => {}}>
            <Task task={t} />
          </SCompletedTask>
        ) : (
          <SUpcomingTask
            key={t.id}
            onClick={() => {
              markAsComplete(t);
            }}
          >
            <Task task={t} />
          </SUpcomingTask>
        )
      )}
    </STaskListContainer>
  );
};

export default TasksList;
