import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

//Card
const Card = (props) => {
	return (
		<CardBg brand={props.brand} size={props.size}>
			<div
				className={
					props.layout === 'alt' ? 'flex flex-row-reverse gap-8' : 'flex gap-8'
				}>
				<CardImage
					src={props.src}
					size={props.size}
					alt={props.alt}
					imgClass={props.imgClass}
				/>
				<CardContent
					title={props.title}
					description={props.description}
					size={props.size}
					brand={props.brand}
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
	alt: 'this is an alt message',
	imgClass: ''
};

Card.propType = {
	brand: PropTypes.oneOf(['world', 'visit', 'ride']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	layout: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	imgClass: PropTypes.string
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
					'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] ',
				visit:
					'container flex pl-10 py-10 relative rounded-xl w-full h-[654px] ',
				ride: 'container flex pl-10 py-10 relative rounded-xl w-full h-[654px]'
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
			sm: 'w-32 h-32 rounded-[360px]',
			md: 'w-60 h-60 rounded-[360px]',
			lg: 'w-full h-[576px] rounded-lg'
		};
		return imgSize[size];
	}
	const imgClass = getClass(props.size);
	return (
		<img
			className={`${imgClass} ${props.imgClass}`}
			src={props.src}
			alt={props.alt}
		/>
	);
};

//CardContent
const CardContent = (props) => {
	function getClass(brand, size) {
		const classValue = {
			world: {
				sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
				md: 'w-60 h-60 rounded-[360px] object-cover',
				lg: 'w-[728px] h-[576px] rounded-lg object-cover'
			},
			visit: {
				sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
				md: 'w-60 h-60 rounded-[360px] object-cover',
				lg: 'w-[728px] h-[576px] rounded-lg object-cover'
			},
			ride: {
				sm: 'flex flex-col justify-center items-start self-stretch gap-2 py-2',
				md: 'w-60 h-60 rounded-[360px] object-cover',
				lg: 'w-[728px] h-[576px] rounded-lg object-cover'
			}
		};
		return classValue[brand][size];
	}
	const contentClass = getClass(props.brand, props.size);

	function getTitle(size) {
		var titleSize = {
			sm: 'heading-3',
			md: 'heading-3',
			lg: 'heading-2'
		};
		return titleSize[size];
	}

	const titleClass = getTitle(props.size);

	function getTitleColor(brand) {
		const titleColor = {
			world: 'text-marina-600',
			visit: 'text-amethyst-600',
			ride: 'text-apricot-600'
		};
		return titleColor[brand];
	}
	const titleColor = getTitleColor(props.brand);

	return (
		<div className={contentClass}>
			<Typography variant={titleClass} className={titleColor}>
				{props.title}
			</Typography>
			<Typography variant='body'>{props.description}</Typography>
		</div>
	);
};

export { Card };

