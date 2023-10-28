import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('loading')
  useEffect(() => {
    fetch('http://3.108.190.95:3000/')
      .then((response) => {
        console.log('got response now converting')
        response.json()
      })
      .then((data) => {
        console.log('got json data')
        console.log(data);
        setCount(data);
      })
    console.log(import.meta.env.VITE_API_URL);
  }, []);
  return (
    <>
      <div>
        Make API call...
        {count}
      </div>
    </>
  )
}

export default App
