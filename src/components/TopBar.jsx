import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <header>
      <nav className="bg-white w-[100%] h-auto absolute border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-end">
          <Link to="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Register / Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default TopBar