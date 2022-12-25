import React from 'react'
import { SideBar, BlogCards } from '../components'

const Home = () => {
  return (
    <div className='flex'>
        <SideBar />
        <BlogCards />
    </div>
  )
}

export default Home