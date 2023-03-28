import React from 'react';
import Typography from '../components/Typography';

const NavbarLink = (props) => {
	return (
		<a href={props.href} className='flex gap-1 align-middle items-center pt-1'>
			<Typography variant='subtitle-1'>{props.children}</Typography>
			{props.hasIcon === 'true' && (
				<i class='fa-solid fa-chevron-down fa-xs pb-1'></i>
			)}
		</a>
	);
};

export default NavbarLink;
