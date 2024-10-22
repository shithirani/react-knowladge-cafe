import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

function App() {
  const[bookmarks,setBookmarks]=useState([])
  const[readingTime,setReadingTime]=useState(0)
 
  const handleAddToBookmark =blog=>{
     const newBookmarks=[...bookmarks,blog]
     setBookmarks(newBookmarks)
  }
  const handleMarkAsRead=(time,id)=>{
    console.log(time)
    const times=time.split(' ')[0]
    const newReadingTime=readingTime+parseInt(times)
    console.log(newReadingTime)
    setReadingTime(newReadingTime)
 
    // remove the read blog from bookmark 
    // console.log('remove bookmark',id)
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id !==id)
    setBookmarks(remainingBookmarks)
    
  }

  return (
    <>
     
     <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      
    </div>
      
      
    </>
  )
}

export default App
