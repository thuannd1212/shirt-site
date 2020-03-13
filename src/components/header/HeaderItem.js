import React from 'react'
import '../../styles/header/HeaderItem.css'

const HeaderItem = ({itemName}) => {
	return (
		<li><a href="#">{itemName}</a></li>
	)
}

export default HeaderItem