import React from 'react'
import styled from 'styled-components';

const TodoListBlock = styled.section` 
  flex: 1; //TodoTemplate에서 먹인 display:flex 
           //에서 flexDirection: column 이기 때문에 내가 차지할 수 있는 영역 전부를 차지합니다.
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y : auto; // 항목이 많아지게 되면 스크롤바를 보여준다.
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      TodoList
    </TodoListBlock>
  )
}

export default TodoList;