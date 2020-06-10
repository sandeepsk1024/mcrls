import Actions from "../actions";
const initialUiState = {
  activeTabIndex: 0
};

const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case Actions.types.UI.ACTIVATE_TAB:
      return {
        ...state,
        activeTabIndex: action.payload.tabIndex
      };
    default:
      return {
        ...state
      };
  }
};

export default uiReducer;
