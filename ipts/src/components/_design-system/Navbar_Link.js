import React from 'react';

const Navbar_Link = (props) => {
	return (
		<a href='#' className='flex gap-1 align-middle items-center pt-1'>
			<h2 className='subtitle-1'>{props.children}</h2>
			{props.hasIcon === 'true' && (
				<i class='fa-solid fa-chevron-down fa-xs pb-1'></i>
			)}
		</a>
	);
};

export default Navbar_Link;
