import React from 'react';

const Typography = (props) => {
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
	const textClass = getClass(props.variant);
	return <div class={textClass}>{props.children}</div>;
};

export default Typography;
