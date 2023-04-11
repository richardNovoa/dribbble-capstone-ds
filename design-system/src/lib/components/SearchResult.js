import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const SearchResult = (props) => {
	if (props.type === 'default') {
		return (
			<div className='flex bg-white rounded-[16px] overflow-hidden h-48'>
				<img
					src={props.imgSrc}
					alt='results'
					className='w-1/3 h-auto object-cover'
				/>
				<div className='p-6 flex flex-col justify-between w-2/3'>
					<Typography variant='heading-3' className='text-left'>
						{props.title}
					</Typography>
					<div className='flex justify-between h-full'>
						<div className='flex flex-col justify-between text-left'>
							<Typography variant='body'>{props.subtitle}</Typography>
							<div className=''>
								<Typography variant='body' className='text-marina-900'>
									{props.status}
								</Typography>
								<Typography variant='body'>
									<strong>{props.rating}</strong>/10 Good ({props.reviews}{' '}
									reviews)
								</Typography>
							</div>
						</div>
						<div className=' text-right flex-col flex justify-end'>
							<Typography variant='heading-2' className='text-amethyst-700'>
								${props.price}
							</Typography>
							<Typography variant='body'>includes taxes and fees</Typography>
						</div>
					</div>
				</div>
			</div>
		);
	}
	if (props.type === 'ride') {
		return (
			<div className='bg-white rounded-[16px] flex justify-between px-7 py-4'>
				<div className='h-full flex flex-col gap-2'>
					<div className='flex'>
						<i className='fas fa-train self-center pr-2'></i>
						<Typography variant='heading-3'>{props.title}</Typography>
					</div>
					<Typography className='text-amethyst-700'>
						{props.subtitle}
					</Typography>
					<Typography className='text-red-500'>{props.status}</Typography>
				</div>
				<div className='flex flex-col gap-2 text-right'>
					<Typography variant='heading-3'>{props.time} min</Typography>
					<Typography>{props.distance} miles</Typography>
				</div>
			</div>
		);
	}
};

SearchResult.defaultProps = {
	type: 'default',
	title: 'Ramada by Wyndham Miami Springs/Miami',
	subtitle: 'Breakfast Included',
	status: 'fully refundable',
	rating: '7.5',
	reviews: '3,135',
	price: '9912009',
	time: '95',
	distance: '240',
	imgSrc:
		'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80'
};

SearchResult.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	status: PropTypes.string,
	rating: PropTypes.string,
	reviews: PropTypes.string,
	importantNumber: PropTypes.string,
	type: PropTypes.string,
	imgSrc: PropTypes.string
};

export { SearchResult };