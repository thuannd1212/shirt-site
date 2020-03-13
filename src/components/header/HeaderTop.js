import React from 'react'
import HeaderItem from './HeaderItem'
import '../../styles/header/HeaderTop.css'

const HeaderTop = () => {
	return (
		<ul>
			<HeaderItem itemName={'Sell your art'} />
			<HeaderItem itemName={'Login'} />
			<HeaderItem itemName={'Signup'} />
		</ul>
	)
}

export default HeaderTop