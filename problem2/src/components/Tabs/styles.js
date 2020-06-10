import styled from "styled-components";
export const STabContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-around;
  box-shadow: -1px 0px 5px 1px lightgray;
`;
export const STabContent = styled.div`
  margin-bottom: 1rem;
`;

export const STab = styled.div`
  color: lightgray;
  height: 2rem;
  width: 100%;
  padding: 1rem 2rem;
`;
export const SSelectedTab = styled(STab)`
  color: navy;
  background-color: lightblue;
`;

//box shadow generated from https://www.cssmatic.com/box-shadow
