import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='w-full bg-secondaryColor h-24 px-5'>
      <div className="container mx-auto w-full h-full flex items-center justify-between">
        <Link to="/">
        <article className='logo text-fontPrimary text-xl md:text-2xl font-semibold'>Movie App</article>
        </Link>
        <article className='user-image w-10 sm:w-14 cursor-pointer'>
          <img src="/images/user.png" className='w-full object-cover' alt="user" />
        </article>
      </div>
    </header>
  )
}

export default Header