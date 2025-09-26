import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("olive")

 
  return (
    <>
      <div className='w-full h-screen duration-200' style={{
        backgroundColor: color
      }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-1 mx-4' onClick={() =>{
            setcolor("red")
          }}>
            <button className='outline-none px-4 py-2 rounded-xl ' style={{ backgroundColor: "red" }}>
              Red

            </button>
          </div>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-1 mx-4' onClick={() =>{
            setcolor("cyan")
          }}>
            <button className='outline-none px-4 py-2 rounded-xl ' style={{ backgroundColor: "cyan" }}>
              
              cyan 

            </button>
          </div>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-1 mx-4 ' onClick={() =>{
            setcolor("black ")
          }}>
            <button className='outline-none px-4 py-2 rounded-xl ' style={{ backgroundColor: "black"  , color : "white"}}>
              Black 

            </button>
          </div>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-1 mx-4' onClick={() =>{
            setcolor("green")
          }}>
            <button className='outline-none px-4 py-2 rounded-xl ' style={{ backgroundColor: "green" }}>
              green

            </button>
          </div>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-1 mx-4' onClick={() =>{
            setcolor("yellow")
          }}>
            <button className='outline-none px-4 py-2 rounded-xl ' style={{ backgroundColor: "yellow" }}>
              yellow

            </button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-2 py-1 mx-4 'onClick={() =>{
            setcolor("gray")
          }} >
            <button className='outline-none px-4 py-2 rounded-xl ' style={{ backgroundColor: "gray " }}>
              gray

            </button>
          </div>

         

        </div>
      </div>

    </>
  )
}

export default App
