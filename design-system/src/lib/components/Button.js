import React from 'react';
import Typography from './Typography';

const Button = (props) => {
	return (
		<button
			href='#'
			className=' items-center py-4 px-8 box-content bg-amethyst-700 text-white rounded-[32px] uppercase self-center hover:bg-amethyst-900 select-none active:bg-amethyst-700 focus:outline-none focus:ring focus:ring-amethyst-400'>
			{props.children}
		</button>
	);
};

export { Button };
