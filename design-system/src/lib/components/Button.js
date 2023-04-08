import React from 'react';
import Typography from './Typography';
import PropTypes from 'prop-types';

const Button = (props) => {
	if (props.type === 'primary') {
		return (
			<button
				href='#'
				className=' items-center py-4 px-8 box-content bg-amethyst-700 text-white rounded-[32px] self-center hover:bg-amethyst-900 select-none active:bg-amethyst-700 focus:outline-none focus:ring focus:ring-amethyst-400'>
				<Typography variant='label'>{props.children}</Typography>
			</button>
		);
	} else if (props.type === 'secondary') {
		return (
			<button
				href='#'
				className=' items-center py-4 px-8 box-content bg-marina-900 text-white rounded-[32px] self-center hover:bg-marina-1100 select-none active:bg-marina-800 focus:outline-none focus:ring focus:ring-marina-400'>
				<Typography variant='label'>{props.children}</Typography>
			</button>
		);
	}
};

Button.defaultProps = {
	type: 'primary'
};

Button.propTypes = {
	type: PropTypes.string
};

export { Button };
