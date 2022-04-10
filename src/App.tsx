import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './Pages'
import NavBar from './Components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <Routes key={'dashboardLanding'}>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
