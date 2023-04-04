import React from 'react';
import PropTypes from 'prop-types';
import down from '../assets/media/Decorative-divider-down.svg';
import up from '../assets/media/Decorative-divider-up.svg';

const Divider = (props) => {
	return (
		<div className='w-full'>
			{props.direction === 'up' && <img src={up} />}
			{props.direction === 'down' && <img src={down} />}
		</div>
	);
};

Divider.defaultProps = {
	direction: 'up'
};

Divider.propTypes = {
	direction: PropTypes.string
};

export { Divider };
