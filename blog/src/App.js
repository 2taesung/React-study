/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '내 사랑 비빔밥']);

  let posts = '강남 고기 맛집';
  let [따봉, 따봉변경] = useState(0)
  // 따봉변경(대체할데이터)
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      <button onClick={ ()=>{ 글제목변경(글제목[0] = '여자코트') } }>버튼</button>      <div className="list">
        <h3>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경('rse')} }>👕</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>


    </div>
  );
}

export default App;
