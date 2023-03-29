import React from 'react';

const Info = (props) => {
	if (props.variant === 'img-left') {
		return (
			<div className='flex p-10 w-full justify-center'>
				<img
					src={props.image}
					alt='demo'
					className='w-4/5 border-2 border-capstonered-300'
				/>
				<div className='flex flex-col justify-between p-10 w-80'>
					{props.children}
				</div>
			</div>
		);
	}
	if (props.variant === 'img-right') {
		return (
			<div className='flex p-10 w-full justify-center'>
				<div className='flex flex-col justify-between p-10 w-80'>
					{props.children}
				</div>
				<img
					src={props.image}
					alt='demo'
					className='w-4/5 border-2 border-capstonered-300'
				/>
			</div>
		);
	}
};

export default Info;
