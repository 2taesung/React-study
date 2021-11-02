/*eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '내 사랑 비빔밥']);

  let posts = '강남 고기 맛집';
  let [따봉, 따봉변경] = useState(0)
  // 따봉변경(대체할데이터)
  let [누른제목, 누른제목변경] = useState(0)

  let [modal, modal변경] = useState(false)
  let [입력값, 입력값변경] = useState('')
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'blue', fontSize : '30px' } }>개발 Blog</div>
      </div>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}/>
        : null
      }
      
      <div className="publish">
        <input />
        <button>저장</button>
      </div>

      { 입력값 }
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
      

      <button onClick={
        ()=> {modal변경(!modal)}}>열고닫기</button>
      <button onClick={ 제목바꾸기  }>제목바꾸기</button>      
      <div className="list">
        <h3>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1)} }>👕</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={ ()=>{ modal변경(modal=true) } }>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      {
        글제목.map((a, i)=>{
          return(
          <div className="list" key="i">
            <h3 onClick={ ()=>{누른제목변경(i)}}>{ a }<span onClick={ ()=>{ 따봉변경(따봉 + 1)} }>👕</span> {따봉}</h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
          )
        })
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] } </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
