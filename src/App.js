import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {useSpring,useTransition, animated} from 'react-spring'
console.log("HI")

function refresh_array(arr2, new_el) {
  //console.log(arr1)
  let arr1 = arr2.slice()
  if(arr1.length < 3){
    arr1.push(new_el)
    return arr1
  } else {
    arr1.shift()
    arr1.push(new_el)
    return arr1
  }
}



function App() {
  let [notes, setNotes] = useState([])
  let [comps, setComps] = useState([false,false,false])

  function Component1() {
    const transitions = useTransition(comps[0], p=>p , {
      from: {opacity:0, marginLeft: -1000},
      enter: { opacity:1, marginLeft: 0},
      leave: { opacity:0, marginLeft: -1000},
    })
    return transitions.map(({item, key, props})=>
    item && <animated.div key={key} style={props}> yo whatsup 1 </animated.div>
    )
  }

  function Component2() {
    const transitions = useTransition(comps[1], p=>p , {
      from: {opacity:0, marginTop: -1000},
      enter: { opacity:1, marginTop:0},
      leave: { opacity:0, marginTop: -1000},
    })
    return transitions.map(({item, key, props})=>
    item && <animated.div key={key} style={props}> yo whatsup 2 </animated.div>
    )
  }

  function Component3() {
    const transitions = useTransition(comps[2], p=>p , {
      from: {opacity:0, marginRight:-1000},
      enter: { opacity:1, marginRight:0},
      leave: { opacity:0, marginRight:-1000},
    })
    return transitions.map(({item, key, props})=>
    item && <animated.div key={key} style={props}> yo whatsup 3 </animated.div>
    )
  }

  function Component1Btn() {
    const transitions = useTransition(comps[0], p=>p ,{
      from:{opacity:1},
      enter:{opacity:0, marginLeft:-300},
      leave: {opacity:1, marginLeft:0}
    })
    return transitions.map(({item, key,props})=>
    !item && <animated.div key={key} class="comp1-left-btn"> About Me </animated.div>)
  }

  useEffect(() => {
    console.log(comps)
    console.log(notes)
  })

  return (
    <div>
    <div className="App">
      {Component1Btn()}
      <div><button style={btn} onClick={() => {let a = comps.slice(); a[1] = false; a[2] = false; a[0] = true;setComps(a)}}> Click Me </button>
      <button style={btn} onClick={() => {let a = comps.slice(); a[0] = false; a[2] = false; a[1] = true;setComps(a)}}> Click Me </button>
      <button style={btn} onClick={() => {let a = comps.slice(); a[1] = false; a[0] = false; a[2] = true;setComps(a)}}> Click Me </button></div>
      <div>{Component1()}{Component2()}{Component3()}</div>
    </div>
    <div>
      <ul class="set">
        <li class="white f" onClick={() => {let a = refresh_array(notes, 'f'); setNotes(a); let audio = new Audio("sound/349-F.mp3"); audio.play()}}></li>
        <li class="black fs" onClick={() => {let a = refresh_array(notes, 'fs'); setNotes(a);let audio = new Audio("sound/369-F-sharp.mp3"); audio.play()}}></li>
        <li class="white g" onClick={() => {let a = refresh_array(notes, 'g'); setNotes(a);let audio = new Audio("sound/391-G.mp3"); audio.play()}}></li>
        <li class="black gs" onClick={() => {let a = refresh_array(notes, 'gs'); setNotes(a);let audio = new Audio("sound/415-G-sharp.mp3"); audio.play()}}></li>
        <li class="white a" onClick={() => {let a = refresh_array(notes, 'a'); setNotes(a);let audio = new Audio("sound/440-A.mp3"); audio.play()}}></li>
        <li class="black as" onClick={() => {let a = refresh_array(notes, 'as'); setNotes(a);let audio = new Audio("sound/466-A-sharp.mp3"); audio.play()}}></li>
        <li class="white b" onClick={() => {let a = refresh_array(notes, 'b'); setNotes(a);let audio = new Audio("sound/495-B.mp3"); audio.play()}}></li>
        <li class="white c" onClick={() => {let a = refresh_array(notes, 'c'); setNotes(a);let audio = new Audio("sound/523-C.mp3"); audio.play()}}></li>
        <li class="black cs" onClick={() => {let a = refresh_array(notes, 'cs'); setNotes(a);let audio = new Audio("sound/545-C-sharp.mp3"); audio.play()}}></li>
        <li class="white d" onClick={() => {let a = refresh_array(notes, 'd'); setNotes(a);let audio = new Audio("sound/587-D.mp3"); audio.play()}}></li>
        <li class="black ds" onClick={() => {let a = refresh_array(notes, 'ds'); setNotes(a);let audio = new Audio("sound/622-D-sharp.mp3"); audio.play()}}></li>
        <li class="white e" onClick={() => {let a = refresh_array(notes, 'e'); setNotes(a);let audio = new Audio("sound/659-E.mp3"); audio.play()}}></li>
      </ul>
    </div>
    </div>
  );
}

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default App;
