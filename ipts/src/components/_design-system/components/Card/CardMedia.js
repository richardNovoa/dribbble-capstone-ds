import React from 'react';

const CardMedia = (props) => {
	if (props.variant === 'sm') {
		return (
			<img
				src={props.image}
				alt='astronaut'
				className='object-cover h-32 w-52'
			/>
		);
	} else {
		return (
			<img
				src={props.image}
				alt='astronaut'
				className='object-cover h-60 w-60'
			/>
		);
	}
};

export default CardMedia;
