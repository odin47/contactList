import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './styles.scss';

const Modal = ({
	children,
	isOpen
}) => {
	return ReactDOM.createPortal(
		isOpen && <div className="modalContainer">{children}</div>,
		document.getElementById('portal')
	)
}

Modal.propTypes = {
	children: PropTypes.node,
	isOpen: PropTypes.bool
}

export default Modal
