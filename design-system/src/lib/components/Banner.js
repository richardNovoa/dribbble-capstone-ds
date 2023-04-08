import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import Typography from './Typography';

const Banner = (props) => {
	return (
		<div className='flex justify-between rounded-[32px] p-4 bg-gradient-to-r from-midnight-700 to-midnight-1000'>
			<Typography variant='heading-3' className='text-white self-center pl-4'>
				Join Shuddle World and get exclusive discounts
			</Typography>
			<Button>Learn More</Button>
		</div>
	);
};
Banner.defaultProps = { brand: 'world' };

Banner.propTypes = {
	brand: PropTypes.string
};

export { Banner };
