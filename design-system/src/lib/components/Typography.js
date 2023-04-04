import React from 'react';
import PropTypes from 'prop-types';

const Typography = (props) => {
	let mergedClass;

	function getClass(type) {
		var textClass = {
			'heading-1': 'heading-1',
			'heading-2': 'heading-2',
			'heading-3': 'heading-3',
			'subtitle-1': 'subtitle-1',
			body: 'body-1',
			label: 'label'
		};
		return textClass[type];
	}

	if (props.className) {
		mergedClass = props.className + ' ' + getClass(props.variant);
	} else {
		mergedClass = getClass(props.variant);
	}

	function getTypography(variant) {
		var semantic = {
			'heading-1': <h1 className={mergedClass}>{props.children}</h1>,
			'heading-2': <h2 className={mergedClass}>{props.children}</h2>,
			'heading-3': <h3 className={mergedClass}>{props.children}</h3>,
			'subtitle-1': <p className={mergedClass}>{props.children}</p>,
			body: <p className={mergedClass}>{props.children}</p>,
			label: <label className={mergedClass}>{props.children}</label>
		};
		return semantic[variant];
	}
	return getTypography(props.variant);
};
Typography.defaultProps = {
	variant: 'body'
};

Typography.propTypes = {
	variant: PropTypes.oneOf([
		'heading-1',
		'heading-2',
		'heading-3',
		'subtitle-1',
		'body'
	])
};

export default Typography;
