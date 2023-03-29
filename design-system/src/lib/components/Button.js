import React from 'react';

const Button = (props) => {
	return (
		<button className='flex gap-1 px-4 pt-4 pb-3 bg-capstoneblue-500 relative text-white border-2 border-capstoneblue-0'>
			<label className='subtitle-1 z-10'>{props.children}</label>
			<div className='bg-capstoneblue-800 absolute w-full bottom-0 h-1/2 left-0'></div>
		</button>
	);
};

export default Button;
