import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/Home'
import AboutPage from './pages/About/About'

function App() {
  
  return (
    
    <Router>

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<HomePage />} />

      </Routes>

    </Router>

  )

}

export default App
