import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss';

const Tile = ({
	imageUrl,
	title,
	subTitle,
	handleContact,
	data
}) => {
	return (
		<div className="tileContainer" onClick={() => handleContact(data)} data-testid="tile-id">
			<div className="imageContainer">
				<img src={imageUrl} alt="Tile" />
			</div>
			<div className="contentContainer">
				<div className="sm-heading">
					{title}
				</div>
				<div className="dateContainer">
					Ph no: {subTitle}
				</div>
			</div>
		</div>
	)
}

Tile.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	publishedAt: PropTypes.string,
	handleContact: PropTypes.func,
	data: PropTypes.object
}

export default Tile
