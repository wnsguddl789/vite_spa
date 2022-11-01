## Typescript + Vite 만 사용하여 Single Page Application 만들어보자

![](https://velog.velcdn.com/images/wnsguddl789/post/8964177c-501b-44db-a620-0df0d081896c/image.png)

### CORE

- Component : BaseComponent로 웹컴포넌트의 역할을 하는 Core Component

  - 사용하기 위해선 상속받아야한다.

- Router : 페이지간 이동 발생시 새로고침이 발생하지않게 하는 Client side Router
  - page Component를 이곳에 등록시켜 페이지간 이동이 가능하게 한다.
