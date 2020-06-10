import React, { useState } from "react";
import { SAdderContainer, TaskInput, AddTaskButton } from "./styles";

const TasksAdd = props => {
  const [newTask, setNewTask] = useState("");
  return (
    <SAdderContainer>
      <TaskInput
        value={newTask}
        onChange={e => {
          e.target.value.trim() && setNewTask(e.target.value);
        }}
      />
      <AddTaskButton
        onClick={() => {
          if (newTask.trim()) {
            props.onAdd(newTask);
          }
          setNewTask("");
        }}
      >
        Add
      </AddTaskButton>
    </SAdderContainer>
  );
};

export default TasksAdd;
