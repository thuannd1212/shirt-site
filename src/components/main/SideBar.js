import React, {useState} from 'react'
import ButtonList from './ButtonList'

const SideBar = () => {
	const listTitle = 
		{
			name: 'Category',
			items: [
				{
					name: 'All Categories',
					items: [
						{
							name: 'Clothing',
							items: [
								{
									name: 'T-Shirts'
								},
								{
									name: 'Hoodies'
								}
							]
						}
					]
				}
			]
		}
	
	const [category, setCategory] = useState(listTitle)
	function change() {
		let newCategory = {...category}

		newCategory.items[0].items = []

		setCategory(newCategory)
	}
	return (
		<aside>
			<ButtonList category={category} />
			<button onClick={change}>Change</button>



		</aside>
	)
}

export default SideBar