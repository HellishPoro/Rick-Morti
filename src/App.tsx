import { Routes, Route } from 'react-router-dom'
import {Home} from './page/Home/Home'
import { Navbar } from './components/Navbar/NavBar'
import { Detail } from './page/Detail/Detail'
import { Category } from './page/Category/Category'
import './App.css'
import { NotFound } from './page/NotFound/NotFound'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category' element={<Category/>}/>
        <Route path='/:category/:id' element={<Detail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
