import React from 'react';
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

import Planet1 from '../common_components/assets/Planet-01.png';
import Planet2 from '../common_components/assets/Planet-02.png';
import Planet3 from '../common_components/assets/Planet-03.png';
import Planet4 from '../common_components/assets/Planet-04.png';
import Planet5 from '../common_components/assets/Planet-05.png';

const InfoLanding = () => {
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
					src='https://images.unsplash.com/photo-1601315488950-3b5047998b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
					alt='galaxy vacation'>
					<div className=' flex flex-col w-1/2 gap-4'>
						<Typography variant='heading-2'>
							Explore the universe <br /> on your own terms
						</Typography>
						<Typography variant='body'>
							Our interstellar travel service is unparalleled, offering you a
							chance to experience the cosmos like never before. With our
							extensive network of spacecraft and experienced crew, you'll
							confidently explore the furthest reaches of the universe in
							comfort and style. Trust us to take you there, and discover what
							it truly means to be the ruler of the galaxy.
						</Typography>
						<div>
							<Button>choose now</Button>
						</div>
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
				<section className='w-full flex justify-center' id='info'>
					<div className='container flex justify-between'>
						<div className='px-10 py-6 w-2/5 flex flex-col justify-between'>
							<div>
								<div className='text-capstoneteal-200'>
									<Typography variant='heading-3'>
										Trusted by the zaklian republic
									</Typography>
								</div>
								<div className='text-white'>
									<Typography variant='body'>
										Our extensive network of spacecraft and experienced crew
										will take you to the furthest reaches of the universe in
										comfort and style. Join us, and experience the wonder of the
										cosmos like never before. <br />
										With a reputation built on excellence and a commitment to
										safety, we are proud to be trusted by the Zaklian Republic -
										the true rulers of the galaxy.
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
										Passengers <br />
										Served
									</Typography>
								</div>
								<div id='callout'>
									<Typography
										variant='heading-2'
										className='text-capstonered-300 text-center'>
										1257
									</Typography>
									<Typography
										variant='subtitle-1'
										className='text-capstonegray-100 text-center'>
										Planets <br />
										served
									</Typography>
								</div>
							</div>
						</div>
						<div className='overflow-hidden' style={{ height: 576 }}>
							<DisplayImage image='https://images.unsplash.com/photo-1634832413517-7f48f67e3da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80' />
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
				<section className='w-full flex justify-center' id='info'>
					<div className='container flex justify-between'>
						<div className='w-full'>
							<DisplayImage image='https://images.unsplash.com/photo-1578189735875-98f8f63e2603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80' />
						</div>
						<div className='px-10 py-6 w-2/5 flex flex-col justify-between'>
							<div>
								<div className='text-capstoneteal-200'>
									<Typography variant='heading-3'>Our commitments</Typography>
								</div>
								<div className='text-white'>
									<Typography variant='body'>
										The Interplanetary Travel Syndicate will stop at nothing to
										ensure the success of our missions.
										<br /> We will use all the tools at our disposal, both
										ethical and otherwise, to achieve our goals. Whether it's
										securing lucrative contracts or outmaneuvering our
										competitors, we are willing to do whatever it takes to
										maintain our position as the premier choice for space travel
										across the galaxy.
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
					</div>
				</section>
				<section className='container self-center' id='destinations'>
					<Typography variant='heading-3' className='text-capstoneteal-200'>
						Popular Destinations
					</Typography>
					<div className='flex justify-between'>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1633984726552-3ed7296dc5c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
								alt='sand'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Deep space outpost</Typography>
								<Typography variant='body'>Home away from home</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1640074130674-146cf793baac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
								alt='ice'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>rebel planet</Typography>
								<Typography variant='body'>Vanished without a trace</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1578589318514-262b58e01f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
								alt='rocks'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Alien Planet</Typography>
								<Typography variant='body'>A new frontier</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1587409968533-18601810ec64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
								alt='jellyfish'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Cyborg Experiments</Typography>
								<Typography variant='body'>A step too far?</Typography>
							</CardContent>
						</Card>
						<div className='hidden lg:block'>
							<Card>
								<CardMedia
									image='https://images.unsplash.com/photo-1537396057802-87d0127d5271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80'
									alt='jungle'
								/>
								<CardContent>
									<Typography variant='subtitle-1'>Planet Break</Typography>
									<Typography variant='body'>
										Travel Off-world in style
									</Typography>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default InfoLanding;
