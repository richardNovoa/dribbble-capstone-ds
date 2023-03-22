import React from 'react';
import Typography from '../_design-system/Typography';

const Hero = (props) => {
	return (
		<div className='w-full bg-dark relative'>
			<img
				src='https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
				alt='orbiting space station'
			/>
			<div className='absolute bottom-8 text-white'>
				<Typography variant='heading-1'>Hello World</Typography>
				<Typography variant='heading-2'>Hello World</Typography>
			</div>
		</div>
	);
};

export default Hero;
