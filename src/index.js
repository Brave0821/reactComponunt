import React from 'react';
/* 임폴트로 가져오겠다 리액트로부터 리액트를  */
import ReactDOM from 'react-dom/client';
/* 리액트 돔으로부터 가져오겠다. */
import App from './App';

// import Main from 
/* import 불러오는 명칭 약자. from 경로 묘듈 및 가져오는 파일 경로
app의 이름으로 ./app를 가져오겠다.? 

from 'react-dom/client'를 ReactDOM(첫번째가 대문자 )의 이름으로 가져오겠다ㅣ. 짧고 간단하게.

import 뒤 약자의 이름 첫 글자는 반드시!! 대문자로 작성해야한다.

*/

const root = ReactDOM.createRoot(document.getElementById('root'));
/* root에 담기. 너무 길다.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* </React.StrictMode> 모드에 묶여있는 파일 검사해줌 */
/* 랜더링 하겠다. 안에 있는것을 */


/* 첫번째 실행 파일 

src에서 퍼블릭ㅇ,러
*/


/* 
리액트가 개발될 땐 리액트 생성 폴더 ★ src 폴더 내에서만 개발이 시작되고 종료된다 ★
리액트가 개발이 종료된 후 index.js의 root.render에 의해서 
react.strivtmode 엄격모드 기준 app js 에서 제작한 개발결과가 
public index.html 파일의 #root 로 전달되어 웹이 최종적으로 사용자들에게 서비스된다.

엄격모드 기준 ->  

*/