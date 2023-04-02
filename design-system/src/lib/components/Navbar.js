import React, { Fragment } from 'react';
import Typography from '../components/Typography';
import PropTypes from 'prop-types';

//Navbar
const Navbar = (props) => {
	return (
		<nav>
			<NavbarPrimary brand={props.brand}>
				<div className='text-white'>Logo</div>
				<div className='flex gap-4'>
					<NavbarLink>World</NavbarLink>
					<NavbarLink>Travel</NavbarLink>
					<NavbarLink>Ride</NavbarLink>
				</div>
			</NavbarPrimary>
			<NavbarSecondary hasSecondary={props.hasSecondary} brand={props.brand}>
				{props.children}
			</NavbarSecondary>
		</nav>
	);
};
Navbar.defaultProps = { brand: 'world', hasSecondary: 'false' };

Navbar.propTypes = {
	brand: PropTypes.string,
	hasSecondary: PropTypes.bool
};

//NavbarLink
const NavbarLink = (props) => {
	return (
		<a href={props.href}>
			<Typography variant='heading-3'>{props.children}</Typography>
		</a>
	);
};
NavbarLink.defaultProps = {
	href: '#'
};

//NavbarPrimary
const NavbarPrimary = (props) => {
	return (
		<Fragment>
			{props.brand === 'world' && (
				<div className='flex flex-col gap-8 py-8 justify-center items-center bg-midnight-1000'>
					<div className='container flex justify-between align-middle text-midnight-100'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'visit' && (
				<div className='flex flex-col gap-8 py-8 justify-center items-center bg-apricot-600'>
					<div className='container flex justify-between align-middle text-apricot-1000'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'ride' && (
				<div className='flex flex-col gap-8 py-8 justify-center items-center bg-marina-1000'>
					<div className='container flex justify-between align-middle text-marina-100'>
						{props.children}
					</div>
				</div>
			)}
		</Fragment>
	);
};

//NavbarSecondary
const NavbarSecondary = (props) => {
	return (
		<Fragment>
			{props.brand === 'world' && (
				<div className='flex py-4 justify-center align-middle bg-midnight-100'>
					<div className='container flex gap-4 align-middle text-midnight-1000'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'visit' && (
				<div className='flex py-4 justify-center align-middle bg-apricot-200'>
					<div className='container flex gap-4 align-middle text-apricot-1000'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'ride' && (
				<div className='flex py-4 justify-center align-middle bg-marina-100'>
					<div className='container flex gap-4 align-middle text-marina-1000'>
						{props.children}
					</div>
				</div>
			)}
		</Fragment>
	);
};
NavbarSecondary.defaultProps = { hasSecondary: false };

export { Navbar, NavbarLink };
