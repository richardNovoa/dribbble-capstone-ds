import Button from 'capstone-ds-rn/dist/components/Button';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import React from 'react';

const Search = (props) => {
	return (
		<div className='flex flex-col pb-8 after:gap-4 bg-capstonegray-800 border border-capstonegray-900'>
			<div className='flex gap-4 p-4 pl-8 bg-capstonegray-900' id='row'>
				<div className='flex gap-1'>
					<input type='radio' name='flightType' value='HTML' />
					<Typography variant='body' className='text-white'>
						Return
					</Typography>
				</div>
				<div className='flex gap-1'>
					<input type='radio' name='flightType' value='HTML' />
					<Typography variant='body' className='text-white'>
						One Way
					</Typography>
				</div>
				<div className='flex gap-1'>
					<input type='radio' name='flightType' value='HTML' />
					<Typography variant='body' className='text-white'>
						Multi-Planet
					</Typography>
				</div>
			</div>
			<div className='flex px-4 gap-4 items-end justify-center' id='row'>
				<div className='gap-2 flex flex-col w-2/5'>
					<Typography variant='body'>Flying from</Typography>
					<input type='text' className='h-12 text-capstonegray-1000 pl-2' />
				</div>
				<div className='gap-2 flex flex-col w-2/5'>
					<Typography variant='body'>Flying to</Typography>
					<input type='text' className='h-12 text-capstonegray-1000 pl-2' />
				</div>
				<Button>Search Flights</Button>
			</div>
		</div>
	);
};

export default Search;
