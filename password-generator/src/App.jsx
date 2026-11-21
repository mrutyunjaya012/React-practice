import { useState, useCallback , useEffect , useRef } from 'react'
import './app.css'


function App() {
  const [length, setLength] = useState(8)
  const [noAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  //use of useRef
  const passwordRef = useRef(null)

  //use of usecallback 
  //password generation function
  const passwordGen= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(noAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*(){}[];,./"

    for(let i=0; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,noAllowed,charAllowed,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select(); 
    passwordRef.current?.setSelectionRange(0,101); // for selection purpose like if i click copy it select and show the select effect 
    window.navigator.clipboard.writeText(Password)
  },[Password])

  //use of useEffect and call the password generator function
  useEffect(()=>{
    passwordGen()
  },[length,noAllowed,charAllowed,passwordGen])


  return (
    <>

    <div className='w-150 h-40 maxw-md mx-auto shadow-md rounded-lg px-5 py-4 my-8 bg-amber-600 '>
    <h1 className='text-white text-2xl text-center  '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50 py-2 h-15'>
      <input type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      className='outline-none bg-emerald-800 hover:bg-emerald-950 text-white px-4 py-2 shrink-0 rounded-3xl mr-4 cursor-pointer '
      onClick={copyPassword}
      >copy</button>
    </div>
    <div className='flex text-lg gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> setLength(e.target.value)} // pass the length of input 
        />length: {length}
      </div>
      <div>
        <input type="checkbox" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> setNumAllowed((prev)=> !prev)} // if true make it false  ... don't use simple true .... becoz it make true permanently
        /> Numbers
      </div>
      <div>
        <input type="checkbox" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> setCharAllowed((prev)=>!prev)}
        /> Characters
      </div>
    </div>
    </div>

    </>
  )
}

export default App
