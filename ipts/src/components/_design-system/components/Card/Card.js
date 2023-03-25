import React from 'react';

const Card = (props) => {
	if (props.variant === 'sm') {
		return <div className='rounded overflow-hidden'>{props.children}</div>;
	} else {
		return (
			<div class='rounded overflow-hidden bg-white shadow'>
				{props.children}
			</div>
		);
	}
};

export default Card;
