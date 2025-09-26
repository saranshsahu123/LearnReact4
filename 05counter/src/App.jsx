import { useState, useCallback, useEffect , useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numalw, setnumalw] = useState(false)
  const [charalw, setcharalw] = useState(false)
  const [password, setpassword] = useState("")

  //userRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"

    if (numalw) str += "0123456789"
    if (charalw) str += "!@#$%^*~(){}[]`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setpassword(pass)


  }, [length, numalw, charalw, setpassword])

  const copypassclipbord = useCallback(()=>{

    // let btn  = document.querySelector('button')
    // btn.style.backgroundColor = "green";
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0 , 10 )
window.navigator.clipboard.writeText(password)
}, [password])

useEffect(() =>{
passwordGenerator()
}, [length, numalw, charalw,passwordGenerator])

  return (
    <>


      <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 
      '>
        <h1 className='text-white text-center'> Password generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' readOnly ref ={passwordRef } />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'  onClick={copypassclipbord}>Copy</button>


        </div>
          <div className='flex text-sm gap-x-2 '>


            <div className='flex items-center gap-x-1 '>

              <input
                type="range"
                min={6} max={100} 
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setlength(e.target.value )}}
              />
              <label> Length : {length}</label>
            </div>

            <input
             type="checkbox" 
             defaultChecked={numalw} 
             id="numberid"
             onChange={() =>{
              setnumalw((prev) => !prev )
             } }/>
             <label htmlFor="numberid"> Number</label>

             <input
             type="checkbox" 
             defaultChecked={numalw} 
             id="charterid"
             onChange={() =>{
              setcharalw((prev) => !prev )
             } }/>
             <label htmlFor="characterid"> Charcter</label>
          </div>


      </div>
    </>
  )
}

export default App
