import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <>
      <div className="App">
        <h1>FV Films</h1>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
