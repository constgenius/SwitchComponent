import { useState } from 'react'
import './App.css'
import Switch from './components/Switch'

function App() {
  const [enabled, setEnabled] = useState(false)
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
      </div>
    </>
  )
}

export default App
