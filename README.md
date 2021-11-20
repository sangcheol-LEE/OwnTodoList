# 사용하는 기술

- HTML
- Styled-Components
- Java Script [Es5/Es6]
- React

# 작업 시 도움이 될 만한 것들

- Open Color : https://yeun.github.io/open-color/
- MainFontColor : 미정
- SubFontColor: 미정

# 작업 진행 순서

- UI요소를 먼저 작성 후 기능구현을 하는 순서로 작업을 진행합니다.
- 새로운 브랜치를 만들어 작업하고 pr 메세지를 통해 제가 작성한 코드를 리뷰하고 메인브랜치에 머지하는 식으로 진행하겠습니다.

## 라이브러리 2개 설치

1.  styled-components
2.  react-icons

## 앞으로 만들어야 할 컴포넌트

1.  TodoTemplate - TodoList의 layout을 설정하는 역할
2.  TodoHead - 오늘의 날짜, 요일, 앞으로 해야할 일이 몇개 남았는지 알려주는 역할
3.  TodoList - 할 일에 대한 정보가 들어있는 Todos라는 배열을 mapping 해서 여러개의 컴포넌트를 렌더링 하는 역할
4.  TodoItem - TodoList에 각 항목
5.  TodoCreate - 새로운 할 일을 등록할 수 있게 해주는 컴포넌트의 역할

# 구현해야 할 기능

- 헤더에 있는 날짜와 요일이 매일 바뀌어야 함
- 할 일이 몇개 남아있는지 갯수가 변경 되어야 함
- TodoList에 할 일 목록이 추가 삭제 수정 되어야 함

# 프로젝트 진행 간 알게 된 것들!

- styledComponent로 body에 globalStyle 먹이기

![스크린샷 2021-11-17 오후 11 26 30](https://user-images.githubusercontent.com/89136968/142218952-0cf4c539-9345-4421-9b87-e1ebc27839b1.png)

- src 폴더 하위에 Components 폴더 생성 후 만들 컴포넌트 순서에 따라 UI작성 후 기능 구현!

- display가 flex인 상황에서 flex : 1 이란 값을 주게 되면 내가 차지 할 수 있는 면적을 전부 차지합니다.

- overflow-y : auto 값을 주게 되면 항목이 많아지게 될때 y 축으로 스크롤이 자동으로 만들어집니다.

- React-icons 사용법

1. 사용하고 싶은 아이콘명을 import 해준다. import { MdDone , MdClose } from 'react-icons/md'

- 스타일컴포넌트에서 컴포넌트 직접 관리하는 법
  &:hover{
  ${Remove} {} 와 같이 itemblock hover시, remove 컴포넌트에 무언가 변화를 줄 수 있다.
