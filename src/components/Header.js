import React from 'react'
import HeaderItem from './HeaderItem'
import '../styles/Header.css'

const Header = () => {
  return (
      <ul>
        <HeaderItem itemName={'Sell your art'} />
        <HeaderItem itemName={'Login'} />
        <HeaderItem itemName={'Signup'} />
      </ul>
  )

}

export default Header