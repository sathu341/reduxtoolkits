import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
import { incCount,decerment } from './reduxapp/counterSlice';
import Page2 from './page2';
function App() {
const dispatch=useDispatch()
const countValue=useSelector((state)=>state.counter.count);
const square=useSelector((state)=> state.counter.sq)
  return (
    <>
     <div>
      <button onClick={()=>{
         dispatch(incCount())
      }}>
        increment
      </button>
      <button onClick={()=>{
        dispatch(decerment())
      }}>Decrement</button>
      <div>
              <h2>Count:{countValue}</h2>
              <h3>Square:{square}</h3>
      </div>
      <Page2/>
     </div>
    </>
  )
}

export default App
