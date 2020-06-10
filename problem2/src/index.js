import React from "react";
import ReactDOM from "react-dom";
import store from "./rdx/store";
import "./styles.css";
import { Provider } from "react-redux";

import TasksPage from "./pages/tasks";

import styled from "styled-components";

const SPageContainer = styled.div`
  margin: 1rem;
`;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <SPageContainer>
        <TasksPage />
      </SPageContainer>
    </Provider>
  </React.StrictMode>,
  rootElement
);
