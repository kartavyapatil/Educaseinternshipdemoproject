import './App.css'
import Navbar from './Pages/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
