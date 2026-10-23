import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Footer/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App