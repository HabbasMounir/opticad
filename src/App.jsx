import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/app.var.css'
import SideBar from './components/sideBar/sideBar'
import Script from './scripts/script'
import Routemap from './Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
      <Routemap/>
    </>
  )
}

export default App
