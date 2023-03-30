import React from 'react';

const Hero = (props) => {
	return (
		<div className='w-full bg-dark relative'>
			<img
				src={props.src}
				alt={props.alt}
				class='w-full h-auto bg-cover'
				style={{ height: 900 }}
			/>
			<div className=' absolute bottom-16 w-full text-white flex justify-center'>
				<div className='w-1/2'>
					<div>{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
