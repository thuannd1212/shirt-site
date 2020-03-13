import React, { createFactory } from 'react'
import SideBarButton from './SideBarButton'

const ButtonList = ({ category }) => {

	return (
		<>
			<SideBarButton name={category.name} />
			{category.items &&
				<ul>
					{category.items.map(item => <li><ButtonList category={item} /></li>)}
				</ul>

			}
		</>
	)
}

export default ButtonList