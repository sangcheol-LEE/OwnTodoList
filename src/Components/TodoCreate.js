import React,{ useState } from 'react'
import styled , { css } from 'styled-components'; // 조건부로 css를 바꿔야 할 때 css를 import 해줍니다.
import { MdAddCircleOutline } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index : 5;
  cursor: pointer;
  width:80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center; 

  position : absolute; 
  left:50%;
  bottom: 0px;
  transform: translate(-50%, 50%); // 해당위치에서 위아래로 -50% 만큼 움직이고 , 좌우로 50% 만큼 다시 움직여서 완벽히 중앙정렬하기 위함으로 사용

  font-size: 60px;
  color : #fff;
  border-radius:40px;
  border : none;
  outline: none;

  transition: 0.125s all ease-in;

  ${props => props.open && css`
    background: #ff6b6b;
    &:hover {
      background: #ff8787;
    }
    &:active {
      background: #fa5252;
    }
    transform: translate(-50%,50%) rotate(45deg);
  `}

`;

const InsertFormContainer = styled.footer`
  width: 100%;
  bottom : 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
   
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius:16px;
  border-bottom-right-radius:16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;


const TodoCreate = () => {
  const [open,setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type : "CREATE",
      todo : {
        id : nextId.current,
        text : value,
        done : false,  
      }
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };



  return (
    <>
    {open && (
      <InsertFormContainer>
        <InsertForm onSubmit={onSubmit}>
          <Input 
            placeholder="할 일을 입력 후, Enter를 누르세요" 
            autoFocus
            onChange={onChange}
            value={value}
            />
        </InsertForm>
      </InsertFormContainer>
    )}
    <CircleButton onClick={onToggle} open={open}>
      <MdAddCircleOutline/>
    </CircleButton>
    </>
  )
}

export default React.memo(TodoCreate);