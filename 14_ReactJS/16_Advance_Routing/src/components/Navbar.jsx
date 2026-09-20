import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 bg-amber-500 font-semibold'>
      <h1 className='italic font-bold font-serif'>YOLO APP</h1>
      <div className='flex justify-around gap-4 uppercase'>
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">Courses</a>
        <a href="">Contact</a>
        <a href="">Login</a>
      </div>
    </div>
  )
}

export default Navbar