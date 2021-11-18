import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.header`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  div {
    display:flex;
    align-items: flex-end;
    justify-content: space-between;

      h1{
        margin:0;
        color: #000;
        font-size: 36px;
      }

      .day {
        margin-top: 4px;
        color: #000;
        font-size: 21px;
      }
  }
 
   .howManyTodo{
    margin-top: 40px;
    color:#eebefa;
    font-size: 18px;
    font-weight:bold;
  }

`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <div>
      <h1>2021년 11월 18일</h1>
      <div className="day">THURSDAY</div>
      </div>
      <div className="howManyTodo">할 일 2개 남음</div>
    </TodoHeadBlock>
  )
}

export default TodoHead;
