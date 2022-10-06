import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <p className='text-red-500'>Hola mundo</p>
      </div>
    </div>
  )
}

export default App
