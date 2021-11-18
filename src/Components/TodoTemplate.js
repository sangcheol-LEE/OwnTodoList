import React from 'react'
import styled from 'styled-components';
 
  const TodoTemplateBlock = styled.div`
    background:#fff;
    width: 512px;
    height: 650px;

    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    position: relative;

    border-radius: 16px;
    box-shadow:0 0 8px rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;

  `;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateBlock>{children}</TodoTemplateBlock>
  )
}

export default TodoTemplate;
