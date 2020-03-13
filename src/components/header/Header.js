import React from 'react'
import '../../styles/header/Header.css'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header