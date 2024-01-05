import Header from "./Header";
import Main from "./Main";
import Footer  from "./Footer";
function App() {
  /* return 함수 밖에서도 사용할 수 있게 해라. 다른 곳에서도 쓸 수 있어야하니까 return
  내부든 외부든 쓸 수 있게 반환값
  */
  return ( 
    <div className="App">
      <h1>hello react!</h1>
      <Header />
      <Main />
      <Footer />
    </div>
    /* name을 붙여야한다. 
    html 리액트 둘 다 class 충돌날 수 있어서 
    */
  );
}

export default App;

/* app을 내보내겠다. - > index -> import App from './App'; */

/* 
리액트는 src 개발환경 내에서 html 파일을 생성하지 않고 
모두 js 파일로 생성되서 개발된다.
★ js는 원칙적으로 js 작성파일이기 때문에 ★

리액트에서 html을 js내에서 표현하려면 funtion 함수를 먼저 생성하여 작성해야한다.
함수 내에 html 작성하면 jsx문법과 함께 js와 html을 사용할 수 있어 효율적이다.

html 사용하려면 함수를 사용해야한다.

함수명을 컴포넌트라고 부른다.


다른 js 파일로 작성되어있는 컴포넌트를 불러오려면 
해달 컴포넌트 맨 하단에 export default 컴포넌트 명으로 
내보내는 리액트가 작성되어 있어야한다 

그 후 내보낸 컴포넌트를 받는 js파일에서 
import 명령으로 import 받는 컴포넌트 명 from 해당 파일 경로로 작성해서 컴포넌트를 받아 사용하게 된다.



*/