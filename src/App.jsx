import { useState } from 'react'


import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

function App() {

  return (
    <>
     
     <Header></Header>
    <div className='md:flex'>
    <Blogs></Blogs>
      <BookMarks></BookMarks>
      
    </div>
      
      
    </>
  )
}

export default App
