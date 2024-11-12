import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/app.var.css'
import SideBar from './components/sideBar/sideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
    </>
  )
}

export default App
