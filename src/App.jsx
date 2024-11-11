import './App.css'
import { Login, Register, Home, JobDetail } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
