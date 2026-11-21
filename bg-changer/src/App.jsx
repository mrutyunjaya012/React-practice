import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  const [name, setName] = useState("olive")

  return (
  <div className="w-full h-screen duration-400" style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center inset-x-0 top-60 px-2 text-3xl'>it's {name}</div>

    <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-20 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2 text-xl '>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"red"}}
        onClick={()=> {
          setColor("red") 
          setName("red")

        }
      }
        >Red</button>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"pink"}}
        onClick={()=>{
          setColor("pink")
           setName("pink")
        }
        }
        >Red</button>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"blue"}}
        onClick={()=>{
          setColor("blue")
           setName("blue")
        }
        }
        >Red</button>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"grey"}}
        onClick={()=>{
          setColor("grey")
           setName("grey")
        }
        }
        >Red</button>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"green"}}
        onClick={()=>{
          setColor("green")
           setName("green")
        }
        }
        >Red</button>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"yellow"}}
        onClick={()=>{
          setColor("yellow")
           setName("yellow")
        }
        }
        >Red</button>
        <button className='outline-none px-4  rounded-full px-1 py-1 cursor-pointer'
        style={{backgroundColor:"olive"}}
        onClick={()=>{
          setColor("olive")
           setName("olive")
        }
        }
        >Red</button>
      </div>
      
    </div>
  </div>
  )
}

export default App
