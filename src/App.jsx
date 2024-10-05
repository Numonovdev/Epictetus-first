import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState,navigator, useRef } from 'react';
import './App.css'
import Search from './components/Select/Search';
import Home from './pages/Hamo';
import Uidesign from './pages/Uidesign';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Footer from './components/Footer';

function App() {

  const homeRef = useRef('/')
  useEffect(function(){
homeRef
  },[])
  
  return (
    <>
    <header className='flex w-full text-white items-center justify-between'>
      <div className="cursor-pointer flex items-center gap-[11px]">
        <div className='boxshadov w-[35px] h-[35px] bg-[#4B5563] flex rounded-[3px] items-center justify-center'><h1 className='SourceSansPro font-semibold text-lg not-italic'>E</h1></div>
        <p className='PatrickHand text-lg not-italic font-normal'>Epictetus</p>
      </div>
      <div className='flex items-center gap-[45px]'>
      <Link to='/' className='PatrickHand text-base' ></Link>
      <Link to='/uidesign' className='PatrickHand text-base' >UI Design</Link>
      <Link to='/frontend' className='PatrickHand text-base' >Front-end</Link>
      <Link to='/backend' className='PatrickHand text-base' >Back-end</Link>
      <Link to='/select' className='PatrickHand text-base' >
          <select className='bg-transparent' >
           <option >Lainnya</option> 
           <option >Lainnya</option> 
         </select>
      </Link>
      </div>
      <Search/>
    </header>
    <Routes>
      <Route ref={homeRef} path='/' element={<Home/>}></Route>
      <Route path='/uidesign' element={<Uidesign/>}></Route>
      <Route path='/frontend' element={<Frontend/>}></Route>
      <Route path='/backend' element={<Backend/>}></Route>
    </Routes>
    <Footer/>
    </>

  )
}

export default App
