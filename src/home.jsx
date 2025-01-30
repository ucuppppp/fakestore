import { useState } from 'react'
import './App.css'
import myAxios from './lib/axios'

function Home() {
  const [count, setCount] = useState(0)

  const fetch = async() => {
    try{
      const data = await myAxios.get('/products');
      console.log(data)
    }catch(e){
      console.log(e)
    }
  }

  fetch()
    
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Home.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
