import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
	return (
		<div className={props.className}>
			<div className='gap-2 flex bg-white border border-midnight-900 p-4 align-baseline'>
				{props.hasIcon && <i className={`${props.iconClass} pt-1`} />}
				<input
					type='text'
					placeholder={props.placeholder}
					value={props.value}
					className=''></input>
			</div>
		</div>
	);
};

FormInput.defaultProps = {
	hasIcon: true,
	iconClass: 'fa-solid fa-user',
	placeholder: 'placeholder',
	className: '',
	value: ''
};

FormInput.propTypes = {
	hasIcon: PropTypes.bool,
	iconClass: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.string
};

export { FormInput };
