import { useCallback, useState,useEffect } from 'react'

import './index.css'

function App() {
 
  const [length,setLength]=useState(8)
  const [numbersAllowed,setnumbersAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState('')

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numbersAllowed) str+='1234567890'
    if(charAllowed) str+='!@#$%^&*'

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numbersAllowed,charAllowed])

  useEffect(()=>{
    passwordGenerator()
  },[length,numbersAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-slate-400 flex flex-col'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type='text'
           value={password}
           className='w-full outline-none py-1 px-3'
           readOnly
           placeholder='password'
          
          />
          <button className='bg-orange-500 text-white'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{ setLength(e.target.value) }}
            />
            <label >length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={()=>{setnumbersAllowed(prev=> !prev)}}
          
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{setcharAllowed(prev=> !prev)}}
          
            />
            <label htmlFor="characterInput">Character</label>
          </div>


        </div>
    </div>
    </>
  )
}

export default App
