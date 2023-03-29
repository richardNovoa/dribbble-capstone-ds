import React from 'react';
import logo from '../assets/logo-light.svg';
import Typography from '../components/Typography';

const Footer = (props) => {
	return (
		<footer>
			<div
				className='flex justify-center bg-capstonegray-800 pt-20 pb-10 border-t-8 border-black'
				id='footer-top'>
				<div className='container flex justify-between'>
					<div className='flex flex-col gap-3'>
						<div className='text-capstoneteal-200'>
							<Typography variant='subtitle-1'>SITEMAP</Typography>
						</div>
						<div className='text-capstonegray-300'>
							<a href='#'>
								<Typography variant='body'>IPTS Travel</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>IPTS Rail</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>IPTS Info</Typography>
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<div className='text-capstoneteal-200'>
							<Typography variant='subtitle-1'>tickets and fares</Typography>
						</div>
						<div className='text-capstonegray-300'>
							<a href='#'>
								<Typography variant='body'>Terra</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Andromeda</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Orion</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Klingon</Typography>
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<div className='text-capstoneteal-200'>
							<Typography variant='subtitle-1'>in the news</Typography>
						</div>
						<div className='text-capstonegray-300'>
							<a href='#'>
								<Typography variant='body'>IPTS Blog</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>IPTS Corporate</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Newsletter</Typography>
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<div className='text-capstoneteal-200'>
							<Typography variant='subtitle-1'>services & policies</Typography>
						</div>
						<div className='text-capstonegray-300'>
							<a href='#'>
								<Typography variant='body'>Service Updates</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Contact Us</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Privacy Policy</Typography>
							</a>
							<a href='#'>
								<Typography variant='body'>Data Policy</Typography>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className='flex py-4 bg-capstonegray-1000 justify-center'
				id='footer-bottom'>
				<div className='flex container justify-between text-white'>
					<img src={logo} className='h-8 ' alt='logo' />
					<div className='pt-1'>
						<Typography variant='body'>
							2023 Interplanetary Travel Syndicate. All rights reserved
						</Typography>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
