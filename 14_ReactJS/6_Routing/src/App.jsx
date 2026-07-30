import Home from "./Home"
import About from "./About"
import Notfound from "./NotFound"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
const App = () => {
  return (
    <div>

      <BrowserRouter>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/*' element={<Notfound/>}/>

          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
