import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('loading')
  useEffect(() => {
    fetch('http://3.108.190.95:3000/')
      .then((response) => response.json())
      .then((data) => setCount(data))
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
