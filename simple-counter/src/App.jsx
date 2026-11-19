import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const [msg,setmsg] = useState('')

  const addValue = ()=>{
    if(count<20){
      setCount(count+1)
      setmsg('')
    }else{
      setmsg("value can't be more than 20")
    }
  }
  const subtractValue = ()=>{
    if(count>0){
      setCount(count-1)
      setmsg('')
    }else{
      setmsg('value can not be less than 0')
    }
  }
  return (
    <>
    <h2>Welcome to my first counter project ...Ha..Ha ..Ha</h2>

    <h2>count: {count}</h2>
    <button
    onClick={addValue}
    >Increse</button><br/>
    <button onClick={subtractValue}>Decrease</button>
    <p>{msg}</p>
    </>
  )
}

export default App
