import React from "react";
import styled from "styled-components";
const STask = styled.div`
  color: white;
`;
const Task = ({ task }) => {
  return <STask>{task.task}</STask>;
};

export default Task;
