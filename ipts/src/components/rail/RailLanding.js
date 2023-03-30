import React, { useEffect } from 'react';
import Hero from '../common_components/Hero';
import Navbar from 'capstone-ds-rn/dist/components/Navbar/Navbar';
import NavbarLink from 'capstone-ds-rn/dist/components/Navbar/NavbarLink';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import Card from 'capstone-ds-rn/dist/components/Card/Card';
import CardMedia from 'capstone-ds-rn/dist/components/Card/CardMedia';
import CardContent from 'capstone-ds-rn/dist/components/Card/CardContent';
import DisplayImage from 'capstone-ds-rn/dist/components/DisplayImage';
import Banner from 'capstone-ds-rn/dist/components/Banner';
import Button from 'capstone-ds-rn/dist/components/Button';
import Footer from 'capstone-ds-rn/dist/components/Footer';
import Search from '../common_components/Search';

import Planet1 from '../common_components/assets/Planet-01.png';
import Planet2 from '../common_components/assets/Planet-02.png';
import Planet3 from '../common_components/assets/Planet-03.png';
import Planet4 from '../common_components/assets/Planet-04.png';
import Planet5 from '../common_components/assets/Planet-05.png';

const RailLanding = () => {
	useEffect(() => {
		document.title = 'IPTS Rail';
	}, []);
	return (
		<div className='bg-capstonegray-900'>
			<Navbar variant='primary'>
				<NavbarLink href='/travel'>Travel</NavbarLink>
				<NavbarLink href='/rail'>Rail</NavbarLink>
				<NavbarLink href='/'>Info</NavbarLink>
			</Navbar>
			<Navbar variant='secondary'>
				<NavbarLink href='#'>Plan a Journey</NavbarLink>
				<NavbarLink href='#'>Status Updates</NavbarLink>
				<NavbarLink href='#'>Fares</NavbarLink>
				<NavbarLink href='#'>FAQ</NavbarLink>
				<NavbarLink href='#'>Help</NavbarLink>
			</Navbar>
			<main className='pb-20 gap-10 flex flex-col'>
				<Hero
					src='https://pbs.twimg.com/media/CIQb_qLWsAAApjO.jpg:large'
					alt='galaxy vacation'>
					<div className='flex flex-col gap-4'>
						<Typography variant='heading-2'>
							More shuttles. <br /> More places.
						</Typography>
						<Typography variant='body'>
							Our interstellar travel service is unparalleled. Truly.
						</Typography>
						<Search />
					</div>
				</Hero>
				<section className='container self-center' id='destinations'>
					<Typography variant='heading-3' className='text-capstoneteal-200'>
						Destinations across solar systems
					</Typography>
					<div className='flex justify-between'>
						<Card>
							<CardMedia image={Planet1} alt='sand' />
							<CardContent variant='sm'>
								<Typography
									variant='body'
									className='text-capstonegray-100 text-center'>
									Vulcan System
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia image={Planet2} alt='sand' />
							<CardContent variant='sm'>
								<Typography
									variant='body'
									className='text-capstonegray-100 text-center'>
									Qo'noS System
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia image={Planet3} alt='sand' />
							<CardContent variant='sm'>
								<Typography
									variant='body'
									className='text-capstonegray-100 text-center'>
									Bajor System
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia image={Planet4} alt='sand' />
							<CardContent variant='sm'>
								<Typography
									variant='body'
									className='text-capstonegray-100 text-center'>
									Ferenginar System
								</Typography>
							</CardContent>
						</Card>
						<div className='hidden lg:block'>
							<Card>
								<CardMedia image={Planet5} alt='sand' />
								<CardContent variant='sm'>
									<Typography
										variant='body'
										className='text-capstonegray-100 text-center'>
										Cardassia Prime System
									</Typography>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full flex justify-center py-10' id='info'>
					<div className='container flex justify-between'>
						<div className='px-10 py-6 w-2/5 flex flex-col justify-between'>
							<div>
								<div className='text-capstoneteal-200'>
									<Typography variant='heading-3'>
										Connected to the highest power
									</Typography>
								</div>
								<div className='text-white'>
									<Typography variant='body'>
										We are proud to be trusted by the Zaklian Republic - the
										dominating force in the galaxy.
										<br />
										Our extensive network of spacecraft and experienced crew
										will take you to the furthest reaches of the universe in
										comfort and style.
										<br />
										Join us, and experience the wonder of the cosmos like never
										before.
									</Typography>
								</div>
							</div>
							<div className='flex justify-between'>
								<div id='callout'>
									<Typography
										variant='heading-2'
										className='text-capstonered-300 text-center'>
										500k
									</Typography>
									<Typography
										variant='subtitle-1'
										className='text-capstonegray-100 text-center'>
										Planets <br />
										obliterated
									</Typography>
								</div>
								<div id='callout'>
									<Typography
										variant='heading-2'
										className='text-capstonered-300 text-center'>
										19,257
									</Typography>
									<Typography
										variant='subtitle-1'
										className='text-capstonegray-100 text-center'>
										Clone soldiers
									</Typography>
								</div>
							</div>
						</div>
						<div className='w-full'>
							<DisplayImage image='https://images.unsplash.com/photo-1613744450985-fc6372fe6a12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' />
						</div>
					</div>
				</section>
				<section id='banner'>
					<Banner>
						<Typography variant='heading-3'>
							join the interplanetary travel syndicate
						</Typography>
						<Typography variant='body' className='text-center'>
							For a limited time, we're offering an exclusive deal to our new
							customers.
							<br /> Be warned, this offer won't last forever.
						</Typography>
						<Button>CONSCRIPT NOW</Button>
					</Banner>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default RailLanding;
