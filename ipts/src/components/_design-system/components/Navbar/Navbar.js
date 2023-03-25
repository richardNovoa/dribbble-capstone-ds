import React from 'react';
import logo from '../../assets/logo-light.svg';

const Navbar = (props) => {
	let navClass;
	if (props.variant === 'secondary') {
		navClass =
			'bg-capstonegray-1000 text-capstonegray-100 py-2 flex justify-center';
	} else {
		navClass =
			'bg-capstonegray-900 text-capstonegray-100 py-2 flex justify-center';
	}
	return (
		<nav className={navClass}>
			{props.variant === 'primary' && (
				<div className='container flex justify-between align-middle'>
					<img
						src={logo}
						style={{
							height: 32,
							width: 'auto'
						}}
						alt='Interplanetary Travel Syndicate'
					/>
					<div className='flex gap-3'>{props.children}</div>
				</div>
			)}
			{props.variant === 'secondary' && (
				<div className='container flex justify-between align-middle'>
					<div className='flex gap-3'>{props.children}</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
