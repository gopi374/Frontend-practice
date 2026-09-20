import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NoteFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <div className="navbar">
        <h1>YOLO APP</h1>
        <div className='a'>
          <a href="">hello</a><a href="">hello</a><a href="">hello</a><a href="">hello</a><a href="">hello</a>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NoteFound/>} />
      </Routes>
    </div>
  )
}

export default App
