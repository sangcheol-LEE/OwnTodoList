import React from 'react'
import styled,{ css } from 'styled-components';
import { MdDone , MdClose } from 'react-icons/md'
import { useTodoDispatch } from '../TodoContext';


const Remove = styled.div`
  opacity:0; // 아이템을 삭제하는 버튼이며, 아이템위에 hover 됐을 때만 나오게 하기 위해 기본값을 0으로 준다.
  display: flex;
  align-items:center;
  justify-content: center;

  color : #dee2e6;
  font-size: 24px; // 폰트사이즈가 의미하는 것은 아이콘의 크기입니다.
  cursor: pointer;
  &:hover{
    color: #ff6b6b; //리무브 버튼에 커서를 올릴 시 버튼 색깔이 회색에서 빨간색으로 변경됩니다.
  }
`;

const CheckCircle = styled.div`
  width:32px;
  height: 32px;
  border-radius:16px;
  border: 1px solid #ced4da;
  font-size: 24px; // 폰트사이즈가 의미하는 것은 아이콘의 크기입니다.
  display: flex;          // 아이콘이 동그라미 중앙에 정렬되게 하기 위함입니다.
  align-items: center;    // 아이콘이 동그라미 중앙에 정렬되게 하기 위함입니다.
  justify-content:center; // 아이콘이 동그라미 중앙에 정렬되게 하기 위함입니다.
  margin-right: 20px;
  cursor: pointer;
  ${props =>              // 만약 checkCircle에 props로 done 이라는 값이 들어온다면 css가 변화하도록 하는 법.
    props.done &&         // done 값이 있으면,
    css`
      border: 1px solid #38d9a9; // 테두리의 색상도 바꾸고,
      color: #38d8a9;            // 컬러의 색상도 바꿉니다.
    `}
`;

const Text = styled.div`
  flex: 1; 
  font-size : 21px;
  color : #495057;
  ${props => 
    props.done && 
    css`
      color: #ced4da; 
  `}
`;
 
const TodoItemBlock = styled.article`
    display:flex;
    align-items: center;
    padding: 12px 0px;
    &:hover{
     ${Remove} { // 템플릿 문자열 사용하는 것 처럼 컴포넌트를 직접 관리할 수 있다.
      opacity:1;
     }
   }
`;

const TodoItem = ({id,done,text}) => {
  const dispatch = useTodoDispatch();

  const onToggle = () => 
  dispatch({
    type: "TOGGLE",
    id
  });

  const onRemove = () => 
  dispatch ({
    type: "REMOVE",
    id
  })

  return (
    <TodoItemBlock>
      <CheckCircle 
        done={done}
        onClick={onToggle} 
        >
          {done && <MdDone />}
        </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove
        onClick={onRemove}
      >
        <MdClose />
      </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem;
