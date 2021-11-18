import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

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

      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링하기" done={true} />
      <TodoItem text="기능 구현하기" done={false} />

    </TodoListBlock>
  )
}

export default TodoList;