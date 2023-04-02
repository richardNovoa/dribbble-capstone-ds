import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

//Card
const Card = (props) => {
	return (
		<CardBg brand={props.brand} size={props.size}>
			<div
				className={props.layout === 'alt' ? 'flex flex-row-reverse' : 'flex'}>
				<CardImage src={props.src} size={props.size} alt={props.alt} />
				<CardContent
					title={props.title}
					description={props.description}
					size={props.size}
				/>
			</div>
		</CardBg>
	);
};

Card.defaultProps = {
	brand: 'world',
	size: 'lg',
	layout: 'default',
	src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
	title: 'This is a title',
	description: 'this is a description',
	alt: 'this is an alt message'
};

Card.propType = {
	brand: PropTypes.string,
	size: PropTypes.string,
	layout: PropTypes.string,
	src: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	alt: PropTypes.string
};

//CardBg
const CardBg = (props) => {
	function getBg(size, brand) {
		const bgClasses = {
			sm: {
				world: 'flex overflow-hidden gap-4 rounded-full bg-white',
				visit: 'flex overflow-hidden gap-4 rounded-full',
				ride: 'flex overflow-hidden gap-4 rounded-full'
			},
			md: {
				world: 'flex flex-col',
				visit: 'flex flex-col',
				ride: 'flex flex-col'
			},
			lg: {
				world:
					'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] bg-midnight-900',
				visit:
					'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] white',
				ride: 'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] bg-marina-900'
			}
		};

		return bgClasses[size][brand];
	}
	const bgClass = getBg(props.size, props.brand);

	return <div className={bgClass}>{props.children}</div>;
};

//CardImage
const CardImage = (props) => {
	function getClass(size) {
		var imgSize = {
			sm: 'w-32 h-32 rounded-[360px] object-cover',
			md: 'w-60 h-60 rounded-[360px] object-cover',
			lg: 'w-full h-[576px] rounded-lg object-cover'
		};
		return imgSize[size];
	}
	const imgClass = getClass(props.size);
	return <img className={imgClass} src={props.src} alt={props.alt} />;
};

//CardContent
const CardContent = (props) => {
	function getClass(size) {
		var contentSize = {
			sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
			md: 'w-60 h-60 rounded-[360px] object-cover',
			lg: 'w-[728px] h-[576px] rounded-lg object-cover'
		};
		return contentSize[size];
	}
	const contentClass = getClass(props.size);

	function getTitle(size) {
		var titleSize = {
			sm: 'heading-3',
			md: 'heading-3',
			lg: 'heading-2'
		};
		return titleSize[size];
	}
	const titleClass = getTitle(props.size);

	return (
		<div className={contentClass}>
			<Typography variant={titleClass}>{props.title}</Typography>
			<Typography variant='body'>{props.description}</Typography>
		</div>
	);
};

export { Card };
