import React from 'react';
import Hero from '../common_components/Hero';
import Navbar from 'capstone-ds-rn/dist/components/Navbar/Navbar';
import NavbarLink from 'capstone-ds-rn/dist/components/Navbar/NavbarLink';

const RailLanding = () => {
	return (
		<div>
			<Navbar variant='primary'>
				<NavbarLink href='/travel'>Travel</NavbarLink>
				<NavbarLink href='/rail'>Rail</NavbarLink>
				<NavbarLink href='/' hasIcon='true'>
					EN
				</NavbarLink>
			</Navbar>
			<Navbar variant='secondary'>
				<NavbarLink href='#'>Travel</NavbarLink>
				<NavbarLink href='#'>Rail</NavbarLink>
				<NavbarLink href='#' hasIcon='true'>
					EN
				</NavbarLink>
			</Navbar>
			<Hero
				src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiFSlTJ9HZ_Z6L0UhoI4pUsQsyW3z49LYu1DoH5pM-FO-7Cu5K'
				alt='casino vacation'
			/>
		</div>
	);
};

export default RailLanding;
