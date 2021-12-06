import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button';
import './styles.scss';

const Menu = ({list, handleSelect}) => {
	return (
		<div className="menuContainer" data-testid="menu-id"> 
			{
				list && list.length > 0 && list.map((item, index) => (
					<Button key={`${item}-${index}`} handleClick={handleSelect}>{item.toUpperCase()}</Button>
				))
			}
		</div>
	)
}

Menu.propTypes = {
	list: PropTypes.array,
	selected: PropTypes.string
}

export default Menu
