import React from "react";
import { STabContainer, SSelectedTab, STab, STabContent } from "./styles";

const Tabs = ({ children, tabs, onChange, selectedTabIndex = 0 }) => {
  return (
    <>
      <STabContainer>
        {tabs.map((t, i) =>
          selectedTabIndex === i ? (
            <SSelectedTab
              key={i}
              onClick={() => {
                onChange(i);
              }}
            >
              {t}
            </SSelectedTab>
          ) : (
            <STab
              key={i}
              onClick={() => {
                onChange(i);
              }}
            >
              {t}
            </STab>
          )
        )}
      </STabContainer>
      <STabContent>{children}</STabContent>
    </>
  );
};

export default Tabs;
