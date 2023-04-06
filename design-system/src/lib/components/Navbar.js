import React, { Fragment } from 'react';
import Typography from '../components/Typography';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';

//Navbar
const Navbar = (props) => {
	return (
		<nav>
			<NavbarPrimary brand={props.brand}>
				<Logo brand={props.brand} />
				<div className='flex gap-4'>
					{!props.isProd && (
						<Fragment>
							<NavbarLink href='/'>World</NavbarLink>
							<NavbarLink href='/visit'>Visit</NavbarLink>
							<NavbarLink href='/ride'>Ride</NavbarLink>
						</Fragment>
					)}

					{props.isProd && (
						<Fragment>
							<NavbarLink href='/'>World</NavbarLink>
							<NavbarLink href='/#/visit'>Visit</NavbarLink>
							<NavbarLink href='/#/ride'>Ride</NavbarLink>
						</Fragment>
					)}
				</div>
			</NavbarPrimary>
			{props.hasSecondary && (
				<NavbarSecondary brand={props.brand}>{props.children}</NavbarSecondary>
			)}
		</nav>
	);
};
Navbar.defaultProps = { brand: 'world', hasSecondary: true, isProd: false };

Navbar.propTypes = {
	brand: PropTypes.string,
	hasSecondary: PropTypes.bool,
	isProd: PropTypes.bool
};

//NavbarLink
const NavbarLink = (props) => {
	return (
		<a href={props.href}>
			<Typography variant='subtitle-1'>{props.children}</Typography>
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
				<div className='flex flex-col py-2 justify-center items-center bg-midnight-1000'>
					<div className='container flex justify-between items-center align-middle text-midnight-100'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'ride' && (
				<div className='flex flex-col py-2 justify-center items-center bg-apricot-1100'>
					<div className='container flex justify-between  items-center align-middle text-apricot-100'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'visit' && (
				<div className='flex flex-col py-2 justify-center items-center bg-marina-1000'>
					<div className='container flex justify-between items-center align-middle text-marina-100'>
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
				<div className='flex py-3 justify-center align-middle bg-midnight-900'>
					<div className='container flex gap-4 align-middle text-midnight-100'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'ride' && (
				<div className='flex py-3 justify-center align-middle bg-apricot-1200'>
					<div className='container flex gap-4 align-middle text-apricot-100'>
						{props.children}
					</div>
				</div>
			)}
			{props.brand === 'visit' && (
				<div className='flex py-3 justify-center align-middle bg-marina-1100'>
					<div className='container flex gap-4 align-middle text-marina-100'>
						{props.children}
					</div>
				</div>
			)}
		</Fragment>
	);
};
NavbarSecondary.defaultProps = { hasSecondary: false };

export { Navbar, NavbarLink };
