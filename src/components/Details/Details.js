import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss';

const Details = ({
	data,
	handleClose
}) => {
	return (
		<div className="detailsContainer" data-testid="details-id">
			<div className="leftContainer">
				<div className="imageContainer">
					<img src={data.picture.large} />
				</div>
			</div>
			<div className="rightContainer">
				<div className="closeContainer" onClick={handleClose}>
					<div>&#10060;</div>
				</div>
				<div className="contentContainer">
					<div><span>First Name: </span>{data.name.first}</div>
					<div><span>Last Name: </span>{data.name.last}</div>
					<div><span>Age: </span>{data.dob.age}</div>
					<div><span>Gender: </span>{data.gender}</div>
					<div><span>Phone No: </span>{data.phone}</div>
					<div><span>E-Mail: </span>{data.email}</div>
					<div><span>City: </span>{data.location.city}</div>
					<div><span>State: </span>{data.location.state}</div>
					<div><span>Country: </span>{data.location.country}</div>
				</div>
			</div>
		</div>
	)
}

Details.propTypes = {
	profileUrl: PropTypes.string,
	handleClose: PropTypes.func
}

export default Details
