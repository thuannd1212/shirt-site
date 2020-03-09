import React from 'react'
import '../styles/HeaderItem.css'

const HeaderItem = ({itemName}) => {
	return (
		<li><a href="#">{itemName}</a></li>
	)
}

export default HeaderItem