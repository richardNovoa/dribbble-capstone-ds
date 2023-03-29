import React from 'react';

const CardContent = (props) => {
	if (props.variant === 'sm') {
		return <div className='py-2'>{props.children}</div>;
	} else {
		return (
			<div className='p-4 bg-capstoneblue-1000 text-white'>
				{props.children}
			</div>
		);
	}
};

export default CardContent;
