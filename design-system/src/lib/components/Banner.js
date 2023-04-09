import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import Typography from './Typography';

const Banner = (props) => {
	return (
		<div className='flex justify-between rounded-[16px] p-4 bg-gradient-to-r from-midnight-800 to-midnight-1000'>
			<Typography variant='heading-3' className='text-white self-center pl-4'>
				Join Shuddle World and get exclusive discounts
			</Typography>
			<a href={props.bannerHref}>
				<Button type='secondary'>Learn More</Button>
			</a>
		</div>
	);
};
Banner.defaultProps = { brand: 'world' };

Banner.propTypes = {
	brand: PropTypes.string
};

export { Banner };
