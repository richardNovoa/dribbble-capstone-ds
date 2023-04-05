import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
	return (
		<div className='gap-2 flex bg-white border border-midnight-900 p-4 align-baseline'>
			{props.hasIcon && <i class={`${props.iconClass} pt-1`} />}
			<input type='text' placeholder={props.placeholder} className=''></input>
		</div>
	);
};

FormInput.defaultProps = {
	hasIcon: true,
	iconClass: 'fa-solid fa-user',
	placeholder: 'placeholder'
};

FormInput.propTypes = {
	hasIcon: PropTypes.bool,
	iconClass: PropTypes.string,
	placeholder: PropTypes.string
};

export { FormInput };
