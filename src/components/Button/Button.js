import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {GlobalContext} from 'App';
import './styles.scss';

const Button = ({
	children,
	handleClick
}) => {
	const state = useContext(GlobalContext);
	return (
		<button
			className={state.selected === children.toLowerCase() ? 'selectedButton' : ''}
			onClick={()  => handleClick(children.toLowerCase(children))}
			data-testid="button-id"
		>
				{children}
			</button>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	handleClick: PropTypes.func
}

export default Button
