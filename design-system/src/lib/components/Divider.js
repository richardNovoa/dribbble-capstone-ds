import React from 'react';
import PropTypes from 'prop-types';
import rideDivider from '../assets/media/Dividers/ride-divider.svg';
import visitDivider from '../assets/media/Dividers/visit-divider.svg';
import worldDividerLeft from '../assets/media/Dividers/world-divider-left.svg';
import worldDividerRight from '../assets/media/Dividers/world-divider-right.svg';

const Divider = (props) => {
	function getImg(brand, direction) {
		const imgKey = {
			world: {
				left: worldDividerLeft,
				right: worldDividerRight
			},
			visit: {
				left: visitDivider,
				right: visitDivider
			},
			ride: {
				left: rideDivider,
				right: rideDivider
			}
		};
		return imgKey[brand][direction];
	}
	const imgSrc = getImg(props.brand, props.direction);

	return (
		<div className='w-full'>
			<img src={imgSrc} />
		</div>
	);
};

Divider.defaultProps = {
	direction: 'left',
	brand: 'world'
};

Divider.propTypes = {
	direction: PropTypes.string,
	brand: PropTypes.string
};

export { Divider };
