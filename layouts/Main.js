import React, { useReducer, createContext } from "react";
import Content from "../components/Content";
import Header from "../components/Header";

const initialState = {
  selectedTab: "Introduction",
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "setSelectedTab":
      return {
        ...state,
        selectedTab: action.payload,
      };
  }
};

export const RootContext = createContext(null);

const MainLayout = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <RootContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Header />
      <Content>{children}</Content>
    </RootContext.Provider>
  );
};

export default MainLayout;
