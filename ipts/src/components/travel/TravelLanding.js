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
import Search from '../common_components/Search';

const TravelLanding = () => {
	return (
		<div className='bg-capstonegray-900'>
			<Navbar variant='primary'>
				<NavbarLink href='/travel'>Travel</NavbarLink>
				<NavbarLink href='/rail'>Rail</NavbarLink>
				<NavbarLink href='/'>Info</NavbarLink>
			</Navbar>
			<Navbar variant='secondary'>
				<NavbarLink href='#'>Travel</NavbarLink>
				<NavbarLink href='#'>Rail</NavbarLink>
				<NavbarLink href='#' hasIcon='true'>
					EN
				</NavbarLink>
			</Navbar>
			<main className='pb-20 gap-10 flex flex-col'>
				<Hero
					src='https://www.magicfamilygetaways.com/wp-content/uploads/2022/03/header-Sublight-1.jpg'
					alt='galaxy vacation'>
					<div className='flex flex-col gap-4'>
						<Typography variant='heading-2'>A Galaxy of fun</Typography>
						<Typography variant='body'>
							Our interstellar travel service is unparalleled. Truly.
						</Typography>
						<Search />
					</div>
				</Hero>
				<section className='container self-center' id='destinations'>
					<Typography variant='heading-3' className='text-capstoneteal-200'>
						Popular Destinations
					</Typography>
					<div className='flex justify-between'>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1621944670190-fb7116a36943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
								alt='sand'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1474710820418-dd5406ee35d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
								alt='ice'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1576007751787-d23ed65cfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
								alt='rocks'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia
								image='https://images.unsplash.com/photo-1525467187333-8e3f68b8e742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
								alt='jellyfish'
							/>
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
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
				<section className='w-full flex justify-center' id='info'>
					<div className='container flex justify-between'>
						<div className='w-full'>
							<DisplayImage image='https://images.unsplash.com/photo-1578374173713-32f6ae6f3971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' />
						</div>
						<div className='px-10 py-6 w-2/5 flex flex-col justify-between'>
							<div>
								<div className='text-capstoneteal-200'>
									<Typography variant='heading-3'>Our commitments</Typography>
								</div>
								<div className='text-white'>
									<Typography variant='body'>
										We employ every tool at our disposal to secure the most
										favorable pricing, for our clients <br />
										If you're looking to travel in style without breaking the
										bank, look no further than Interplanetary Travel Syndicate.
										And don't worry about those pesky rebels - we'll make sure
										they don't get in the way of your voyage.
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

export default TravelLanding;
