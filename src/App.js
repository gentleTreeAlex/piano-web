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
      from:{transform: 'translate3d(0,-40px,0)'},
      enter:{transform: 'translate3d(0,0px,0)' },
      leave: {transform: 'translate3d(0,-40px,0)'}
    })
    return transitions.map(({item,props, key})=>
     <animated.button key={key} class="comp1-left-btn" onClick={() => {let a = comps.slice(); a[1] = false; a[2] = false; a[0] = true;setComps(a)}}> About Me </animated.button>)
  }

  function Component1Text(){
    const transitions = useTransition(comps[0], p=>p, {
      from: {opacity: 1, marginLeft: -1500},
      enter: {opactiy:1, marginLeft:0},
      leave: {opacity:1, marginLeft:-1500}
    })
    return transitions.map(({item, key, props}) =>
    item && <animated.div key={key} style={props} class="comp1-left-text"> text for comp 1 </animated.div>
    )
  }

  function Component1Text2(){
    const transitions = useTransition(comps[0], p=>p, {
      from: {opacity: 1, marginLeft: -1500},
      enter: {opactiy:1, marginLeft:0},
      leave: {opacity:1, marginLeft:-1500}
    })
    return transitions.map(({item, key, props}) =>
    item && <animated.div key={key} style={props} class="comp1-left-text2"> xd </animated.div>
    )
  }

  function Component2Btn(){
    const transitions = useTransition(comps[1], p=>p, {
      from:{transform: 'translate3d(0,-40px,0)'},
      enter:{transform: 'translate3d(0,0px,0)' },
      leave: {transform: 'translate3d(0,-40px,0)'}
    })
    return transitions.map(({item,props, key})=>
    <animated.button key={key} class="comp2-top-btn" onClick={() => {let a = comps.slice(); a[2] = false; a[0] = false; a[1] = true;setComps(a)}}> Repertoire </animated.button>)
  }

  function Component2Text(){
    const transitions = useTransition(comps[1], p=>p, {
      from: {opacity: 1, marginTop: -1500},
      enter: {opactiy:1, marginTop:0},
      leave: {opacity:1, marginTop:-1500}
    })
    return transitions.map(({item, key, props}) =>
    item && <animated.div key={key} style={props} class="comp2-left-text"> hey </animated.div>
    )
  }

  function Component2Text2(){
    const transitions = useTransition(comps[1], p=>p, {
      from: {opacity: 1, marginTop: -200},
      enter: {opactiy:1, marginTop:0},
      leave: {opacity:1, marginTop:-200}
    })
    return transitions.map(({item, key, props}) =>
    item && <animated.div key={key} style={props} class="comp2-left-text2"> hey </animated.div>
    )
  }

  function Component3Btn(){
    const transitions = useTransition(comps[2], p=>p, {
      from:{transform: 'translate3d(0,-40px,0)'},
      enter:{transform: 'translate3d(0,0px,0)' },
      leave: {transform: 'translate3d(0,-40px,0)'}
    })
    return transitions.map(({item,props, key})=>
    <animated.button key={key} class="comp3-left-btn" onClick={() => {let a = comps.slice(); a[1] = false; a[0] = false; a[2] = true;setComps(a)}}> Students </animated.button>)
  }

  function Component3Text(){
    const transitions = useTransition(comps[2], p=>p, {
      from: {opacity: 1, marginRight: -1500},
      enter: {opactiy:1, marginRight:0},
      leave: {opacity:1, marginRight:-1500}
    })
    return transitions.map(({item, key, props}) =>
    item && <animated.div key={key} style={props} class="comp3-left-text"> hey </animated.div>
    )
  }

  function Component3Text2(){
    const transitions = useTransition(comps[2], p=>p, {
      from: {opacity: 1, marginRight: -1500},
      enter: {opactiy:1, marginRight:0},
      leave: {opacity:1, marginRight:-1500}
    })
    return transitions.map(({item, key, props}) =>
    item && <animated.div key={key} style={props} class="comp3-left-text2"> text for comp 3:2 </animated.div>
    )
  }

  function NotesDisplay() {
    console.log("NotesDisplay" + notes )
    let noteP = ""
    for(let i = 0; i < notes.length; i++){
      if(notes[i].length > 1){
        noteP += notes[i][0] + "# "
      } else {
        noteP += notes[i] + " "
      }
      
    }
    return <p class="noteP"> {noteP} </p>
  }

  useEffect(() => {
    console.log(comps)
    console.log(notes)
  })

  return (
    <div>
      <div className="App">
        <div className="inner">
          <div>{Component1Text()}</div>
          <div>{Component3Text()}</div>
          <div>{Component3Text2()}</div>
          <div>{Component1Btn()}</div>
          <div>{Component2Btn()}</div>
          <div> {Component2Text()}</div>
          <div> {Component2Text2()}</div>
          <div>{Component3Btn()}</div>
          <div> {Component1Text2()}</div>
        </div>
        <div class="second">
            <div>{NotesDisplay()}</div>
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
