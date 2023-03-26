import React from 'react';

const Typography = (props) => {
	let mergedClass;

	function getClass(type) {
		var textClass = {
			'heading-1': 'heading-1',
			'heading-2': 'heading-2',
			'heading-3': 'heading-3',
			'subtitle-1': 'subtitle-1',
			body: 'body-1',
			caption: 'caption'
		};
		return textClass[type];
	}

	if (props.class) {
		mergedClass = props.className + getClass(props.variant);
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
			caption: <caption className={mergedClass}>{props.children}</caption>
		};
		return semantic[variant];
	}
	return getTypography(props.variant);
};

export default Typography;
