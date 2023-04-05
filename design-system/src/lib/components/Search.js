import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormInput } from './FormInput';
import { Button } from './Button';
import Logo from './Logo';
import Typography from './Typography';

const Search = (props) => {
	return (
		<SearchBg brand={props.brand}>
			<div className='flex gap-10'>
				<div className='flex flex-col'>
					<SearchOptions brand={props.brand} />
					<SearchFields brand={props.brand} />
				</div>
				<div className='flex flex-col justify-between'>
					<div class='flex justify-end pb-2'>
						<Logo brand={props.brand} className='h-8' />
					</div>
					<Button>Search</Button>
				</div>
			</div>
		</SearchBg>
	);
};
Search.defaultProps = {
	brand: 'ride'
};

Search.propTypes = {
	brand: PropTypes.oneOf(['world', 'ride', 'visit'])
};

//SearchFields
const SearchFields = (props) => {
	return (
		<div className='flex rounded-[360px] overflow-hidden'>
			<FormInput
				placeholder='Depart From'
				hasIcon
				iconClass='fas fa-plane-departure'
			/>
			<FormInput
				placeholder='Arrive To'
				hasIcon
				iconClass='fas fa-plane-arrival'
			/>
			<FormInput placeholder='Passengers' hasIcon iconClass='fas fa-walking' />
			{props.brand !== 'ride' && (
				<FormInput
					placeholder='Pick Dates'
					hasIcon
					iconClass='fas fa-calendar'
				/>
			)}
		</div>
	);
};

const SearchOptions = (props) => {
	function getClasses(brand) {
		const classKey = {
			world: 'text-marina-700 active:text-marina-600 cursor-pointer',
			visit: 'text-marina-400 active:text-marina-100 cursor-pointer',
			ride: 'text-apricot-500 active:text-apricot-600 cursor-pointer'
		};
		return classKey[brand];
	}
	const optionClasses = getClasses(props.brand);

	return (
		<div className='flex py-4 gap-4'>
			<Typography variant='label' className={optionClasses}>
				One way
			</Typography>
			<Typography variant='body' className={optionClasses}>
				Round Trip
			</Typography>
			<Typography variant='body' className={optionClasses}>
				|
			</Typography>
			{props.brand === 'visit' && (
				<Fragment>
					<Typography variant='body' className={optionClasses}>
						Stays
					</Typography>
					<Typography variant='body' className={optionClasses}>
						Starships
					</Typography>
					<Typography variant='body' className={optionClasses}>
						Packages
					</Typography>
				</Fragment>
			)}
			{props.brand === 'world' && (
				<Fragment>
					<Typography variant='body' className={optionClasses}>
						Lounges
					</Typography>
				</Fragment>
			)}
			{props.brand === 'ride' && (
				<Fragment>
					<Typography variant='body' className={optionClasses}>
						Weekly Pass
					</Typography>
				</Fragment>
			)}
		</div>
	);
};

const SearchBg = (props) => {
	function getClasses(brand) {
		const classKey = {
			world:
				'bg-midnight-1000 rounded-[32px] px-8 pt-4 pb-8 self-end inline-block',
			ride: 'bg-apricot-1100 rounded-[32px] px-8 pt-4 pb-8 self-end inline-block',
			visit:
				'bg-marina-1100 rounded-[32px] px-8 pt-4 pb-8 self-end inline-block'
		};
		return classKey[brand];
	}
	const searchBgClass = getClasses(props.brand);
	return <div className={searchBgClass}>{props.children}</div>;
};

export default Search;

export { Search };
