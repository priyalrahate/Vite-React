import { useState , useCallback, useEffect , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [ length ,setLength] = useState(8)
  const [numAllowed , numNotAllowed]=useState(false);
  const [charAllowed ,charNotAllowed]= useState(false);
  const [password , setPassword]= useState("")
  
  // useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
       if(charAllowed) str+="!@#$%^&*()-_=+{}[]?/;"
 
    for(let i=0;i<=length;i++){
     let char=Math.floor(Math.random()*str.length+1)
     pass=+str.charAt(char)
    }
   setPassword(pass)

  },[length ,numAllowed ,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9);
     window.navigator.clipboard.writeText(password)
  },
[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
   
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg  my-12 text-orange-500 bg-gray-700  text-center'> Password Generator
         <div className='className="flex shadow rounded-lg justify-center overflow-hidden mb-3"'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
           />
          <button
          onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button> 
         </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" 
               min={6}
               max={50}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}}
              />
              <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setCharacterAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          
          </div>
           </div>
     </div>
    </>
  )
}

export default App
