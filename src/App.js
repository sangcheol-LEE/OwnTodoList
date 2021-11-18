import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./Components/TodoTemplate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoCreate from "./Components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(0,0,0,0.3);
    box-sizing:border-box;
    margin:0;
    padding:0;

  }
`;

const App = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </>
  );
}

export default App;
