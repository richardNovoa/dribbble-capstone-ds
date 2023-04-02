import React from 'react';
import Typography from './Typography';

const Button = (props) => {
	return (
		<button className=' items-center py-4 px-8 box-content bg-amethyst-700 text-white rounded-[32px] uppercase self-center'>
			<Typography variant='body'>{props.children}</Typography>
		</button>
	);
};

export default Button;
