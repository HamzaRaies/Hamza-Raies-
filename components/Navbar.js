"use client"
import React from 'react'
import Link from 'next/link'



const Navbar = () => {
    const toggle=()=>{
        const sidebar=document.querySelector(".sidebar")
        sidebar.style.display="flex"
    }
    const noToggle=()=>{
        const sidebar=document.querySelector(".sidebar")
        sidebar.style.display="none"
    }
    
  return (
    <>
    
    <nav className='sidebar text-white flex w-full px-10 py-5 justify-between'>
        <div className="btns flex gap-10">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={noToggle} height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
           <div className="ui-btn">
            <Link href={"/"}>
            <span className='text-xl'>
                Home
            </span>
            </Link>
           </div>
           <div className="ui-btn">
            <Link href={"/about"}>
            <span className='text-xl'>
                About
            </span>
            </Link>
           </div>
           <div className="ui-btn">
            <Link href={"/contact"}>
            <span className='text-xl'>
                Contact
            </span>
            </Link>
           </div>
           <div className="ui-btn">
            <Link href={"/login"}>
            <span className='border-4 border-white px-5 py-1 text-xl'>
                Log in  
            </span>
            </Link>
           </div>


        </div>
    </nav>
    <nav className='navbar text-white flex w-full px-10 py-5 justify-between'>
     <h1 className='text-5xl mt-2'>passop</h1>
        <div className="btns flex gap-10">
           <div className="ui-btn">
            <Link href={"/"}>
            <span className='text-xl'>
                Home
            </span>
            </Link>
           </div>
           <div className="ui-btn">
            <Link href={"/about"}>
            <span className='text-xl'>
                About
            </span>
            </Link>
           </div>
           <div className="ui-btn">
            <Link href={"/contact"}>
            <span className='text-xl'>
                Contact
            </span>
            </Link>
           </div>
           <div className="ui-btn">
            <Link href={"/login"}>
            <span className='border-4 border-white px-5 py-1 text-xl'>
                Log in  
            </span>
            </Link>
           </div>
           <svg xmlns="http://www.w3.org/2000/svg"className='menu-btn' onClick={toggle} height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>


        </div>
        
    </nav>
    </>

  )
}

export default Navbar
