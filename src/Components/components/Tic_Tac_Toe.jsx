import React, { useRef, useState } from 'react'
import './TIC-TAC-TOE.css'
import cross_png from '../Assets/cross.png'
import circle_png from '../Assets/circle.png'
let data=["","","","","","","","","",""];

const Tic_Tac_Toe = () => {
  let [count,setCount] = useState(0);
  let [play,setPlay] = useState(false);

  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
  
  const toggle = (e,num)=>{
    if (play){
      return 0;
    }
    if (count%2===0){
      e.target.innerHTML=`<img src='${cross_png}'>`;
      setCount(count+1);
      data[num]="x";
      console.log(data);
    }else{
      e.target.innerHTML=`<img src='${circle_png}'>`;
      setCount(count+1);
      data[num]="o";

    }
    checkWin();

  }

  const checkWin = () =>{
    if (data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2])
    }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[5])
    }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[8])
    }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[6])
    }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[7])
    }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[8])
    }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[8])
    }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[6])
    }
  }

  const won = (data) =>{
    setPlay(true);
    if (data==="x"){
      titleRef.current.innerHTML=`Congratulation: <img src='${cross_png}'> Won`;
    }else{
      titleRef.current.innerHTML=`Congratulation: <img src='${circle_png}'> Won`;

    }




  }

  const reset = () =>{
    data = ["","","","","","","","","",""];
    setPlay(false);
    setCount(0);
    titleRef.current.innerHTML="<h1>Tic Tac Toe in <span>React<span></h1>";
    box_array.map((e)=>{
      e.current.innerHTML=""

    })
  }


  return (
    <div>
      <div className="title" ref={titleRef}><h1>Tic Tac Toe in <span>React</span></h1></div>
      <div className="board">
        <div className="row1">
          <div className="box" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
          <div className="box" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
          <div className="box" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="box" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
          <div className="box" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
          <div className="box" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="box" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
          <div className="box" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
          <div className="box" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <div className="reset">
        <button onClick={()=>{reset()}}>Reset</button>
      </div>
    </div>
  )
}

export default Tic_Tac_Toe