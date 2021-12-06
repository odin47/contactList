import React from 'react'
import PropTypes from 'prop-types'
import Tile from 'components/Tile';
import './styles.scss';

const List = ({list, handleContact}) => {
	return (
		<div className="listContainer" data-testid={"list-id"}> 
			{
				list && list.length > 0 ? <ul>
					{
						list.map((item, index) => (
							<Tile
								key={`${index}-${item.name.first}`}
								imageUrl={item.picture.large}
								title={`${item.name.last}, ${item.name.first}`}
								subTitle={item.phone}
								handleContact={handleContact}
								data={item}
							/>
						))
					}
				</ul> : <p>
					No Data Found
				</p>
			}
		</div>
	)
}

List.propTypes = {
	list: PropTypes.array,
	handleContact: PropTypes.func
}

export default List
