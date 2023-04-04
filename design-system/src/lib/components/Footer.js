import React from 'react';
import Typography from '../components/Typography';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';

const Footer = (props) => {
	return (
		<footer>
			<FooterTop brand={props.brand}>
				<div className='container flex justify-between py-10'>
					<div>
						<FooterCategory brand={props.brand}>Sitemap</FooterCategory>
						<FooterLink brand={props.brand}>Shuddle Visit</FooterLink>
						<FooterLink brand={props.brand}>Shuddle Rail</FooterLink>
						<FooterLink brand={props.brand}>Shuddle World</FooterLink>
					</div>
					<div>
						<FooterCategory brand={props.brand}>
							Tickets and fares
						</FooterCategory>
						<FooterLink brand={props.brand}>Terra</FooterLink>
						<FooterLink brand={props.brand}>Andromeda</FooterLink>
						<FooterLink brand={props.brand}>Orion</FooterLink>
						<FooterLink brand={props.brand}>Klingon</FooterLink>
					</div>
					<div>
						<FooterCategory brand={props.brand}>In the news</FooterCategory>
						<FooterLink brand={props.brand}>Shuddle Blog</FooterLink>
						<FooterLink brand={props.brand}>Shuddle Corporate</FooterLink>
						<FooterLink brand={props.brand}>Shuddle Newsletter</FooterLink>
					</div>
					<div>
						<FooterCategory brand={props.brand}>
							Services & Policies
						</FooterCategory>
						<FooterLink brand={props.brand}>Service Updates</FooterLink>
						<FooterLink brand={props.brand}>Contact Us</FooterLink>
						<FooterLink brand={props.brand}>Privacy policy</FooterLink>
						<FooterLink brand={props.brand}>Data Policy</FooterLink>
					</div>
				</div>
			</FooterTop>
			<FooterEnd brand={props.brand} />
		</footer>
	);
};
Footer.defaultProps = {
	brand: 'world'
};

Footer.propTypes = {
	brand: PropTypes.string
};

const FooterCategory = (props) => {
	function getClass(brand) {
		const textClass = {
			world: 'text-midnight-1000 mb-3',
			visit: 'text-apricot-1000 mb-3',
			ride: 'text-marina-1000 mb-3'
		};
		return textClass[brand];
	}
	const categoryClass = getClass(props.brand);

	return (
		<Typography variant='subtitle-1' className={categoryClass}>
			{props.children}
		</Typography>
	);
};

const FooterLink = (props) => {
	return (
		<Typography variant='subtitle-1' className='text-amethyst-700'>
			{props.children}
		</Typography>
	);
};

const FooterTop = (props) => {
	function getClass(brand) {
		const getColors = {
			world:
				'flex flex-col justify-center items-center w-full = gap-4 bg-midnight-100 border-t-8 border-r-0 border-b-0 border-l-0 border-midnight-900',
			visit:
				'flex flex-col justify-center items-center w-full = gap-4 bg-apricot-100 border-t-8 border-r-0 border-b-0 border-l-0 border-apricot-600',
			ride: 'flex flex-col justify-center items-center w-full = gap-4 bg-marina-100 border-t-8 border-r-0 border-b-0 border-l-0 border-marina-900'
		};
		return getColors[brand];
	}
	const categoryColor = getClass(props.brand);

	return <div className={categoryColor}>{props.children}</div>;
};

const FooterEnd = (props) => {
	function getClass(brand) {
		const colorClass = {
			world: {
				textColor: 'text-midnight-100',
				bgColor: 'bg-midnight-1000'
			},
			visit: {
				textColor: 'text-apricot-100',
				bgColor: 'bg-apricot-1100'
			},
			ride: {
				textColor: 'text-marina-100',
				bgColor: 'bg-marina-1000'
			}
		};
		return colorClass[brand];
	}
	const classes = getClass(props.brand);
	const textColor = classes.textColor;
	const bgColor = classes.bgColor;

	return (
		<div className={`flex py-4 justify-center ${bgColor}`} id='footer-bottom'>
			<div className='flex container justify-between items-center text-white'>
				<Logo brand={props.brand} />
				<div className='pt-1'>
					<Typography variant='body' className={`${textColor}`}>
						2023 Interplanetary Travel Syndicate. All rights reserved
					</Typography>
				</div>
			</div>
		</div>
	);
};

export { Footer };
