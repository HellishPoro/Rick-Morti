import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home/Home'
import { Navbar } from './components/Navbar/NavBar'
import { Detail } from './pages/Detail/Detail'
import { Category } from './pages/Category/Category'
import { NotFound } from './pages/NotFound/NotFound'
import { AuthProvider } from './context/AuthProvider'
import { Signin } from './components/Login/Signin'
import { PrivedRout } from './components/PrivedRout/PrivedRout'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category' element={<PrivedRout><Category/></PrivedRout>}/>
        <Route path='/:category/:id' element={<PrivedRout><Detail/></PrivedRout>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
