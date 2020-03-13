import React from 'react'
import '../../styles/header/HeaderBottom.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

const HeaderBottom = () => {
  return (
      <div className="header-bottom-container">
        <Logo />
        <SearchBar />
      </div>

  )

}

export default HeaderBottom