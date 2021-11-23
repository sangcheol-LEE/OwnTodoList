import React,{useState} from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./Components/TodoTemplate";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoCreate from "./Components/TodoCreate";
import { TodoProvider } from "./TodoContext";

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
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead/>
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
