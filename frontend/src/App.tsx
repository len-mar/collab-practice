import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [hello, setHello] = useState<string>("")

    function getHello(){
      axios.get("/api/hello").then(r => setHello(r.data))
    }

    useEffect(() => {
        getHello();
    }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is connected to an API</h1>
      <div className="card">
        <p>
            {hello.toString()}
        </p>
      </div>
    </>
  )
}

export default App
