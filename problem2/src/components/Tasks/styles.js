import styled, { keyframes } from "styled-components";
const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const STaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  animation: ${fadeAnimation} 0.5s linear;
`;

export const STask = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.2rem;
`;

export const SUpcomingTask = styled(STask)`
  background-color: lightcoral;
`;
export const SCompletedTask = styled(STask)`
  background-color: green;
`;

export const SAdderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskInput = styled.input`
  width: 70%;
  padding: 0.5rem;
`;

export const AddTaskButton = styled.button`
  width: 20%;
  padding: 0.5rem;
`;
