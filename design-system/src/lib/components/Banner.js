import React from 'react';

const Banner = (props) => {
	return (
		<section className='flex justify-center'>
			<div className='container flex flex-col items-center gap-4 border border-capstoneblue-700 py-10 bg-capstoneblue-1000 text-capstoneblue-0'>
				{props.children}
			</div>
		</section>
	);
};

export default Banner;
