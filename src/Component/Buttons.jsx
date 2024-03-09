import React from 'react'
import styles from './Buttons.module.css';
export default function Buttons({btnClick}) {
  let btn = ['1','2','3','+','4','5','6','-','7','8','9','*','.','0','=','/','<x','C']
  return (
    <div>
      {btn.map((val,index)=><button className={ val==='C'? styles.clearbtn:styles.calcbtn}key={index} onClick={()=>btnClick(val)}>{val}</button>)}
    </div>
  )
}

