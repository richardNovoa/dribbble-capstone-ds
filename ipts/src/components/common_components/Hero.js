import React from 'react';
import Typography from 'capstone-ds-rn/dist/components/Typography';

const Hero = (props) => {
	return (
		<div className='w-full bg-dark relative'>
			<img src={props.src} alt={props.alt} class='w-full h-auto bg-cover' />
			<div className='container absolute bottom-16 text-white flex justify-center'>
				<div>{props.children}</div>
			</div>
		</div>
	);
};

export default Hero;
