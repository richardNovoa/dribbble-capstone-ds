import React from 'react';
import logo from '../../assets/logo-light.svg';

const Navbar = (props) => {
	return (
		<div className='w-full bg-black text-white py-2'>
			<div className='container-md flex justify-between content-center'>
				<img
					src={logo}
					style={{
						height: 48,
						width: 'auto'
					}}
					alt='Interplanetary Travel Syndicate'
				/>
				{props.children}
			</div>
		</div>
	);
};

export default Navbar;
