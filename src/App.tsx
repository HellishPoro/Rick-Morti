import { Routes, Route } from 'react-router-dom'
import { PrivedRout } from './components/PrivedRout/PrivedRout'
import { lazy, Suspense } from 'react'
import './App.css'

function App() {
  const Home = lazy(()=> import('./pages/Home/Home').then(module => ({default: module.Home})))
  const Category = lazy(()=> import('./pages/Category/Category').then(module => ({default: module.Category})))
  const Detail = lazy(()=> import('./pages/Detail/Detail').then(module => ({default: module.Detail})))
  const Signin = lazy(()=> import('./components/Login/Signin').then(module => ({default: module.Signin})))
  const NotFound = lazy(()=> import('./pages/NotFound/NotFound').then(module => ({default: module.NotFound})))
  const Navbar = lazy(()=> import('./components/Navbar/NavBar').then(module => ({default: module.Navbar})))
  const AuthProvider = lazy(()=> import('./context/AuthProvider').then(module => ({default: module.AuthProvider})))


  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((reg)=>{
        console.log("Service Worker registered successfully", reg)
      }).catch(()=>{
        console.error("Service Worker registration failed")
      })
  }
  return (
    <Suspense>
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
    </Suspense>
  )
}

export default App
