import React from 'react';
import Hero from '../common_components/Hero';
import Navbar from 'capstone-ds-rn/dist/components/Navbar/Navbar';
import NavbarLink from 'capstone-ds-rn/dist/components/Navbar/NavbarLink';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import Card from 'capstone-ds-rn/dist/components/Card/Card';
import CardMedia from 'capstone-ds-rn/dist/components/Card/CardMedia';
import CardContent from 'capstone-ds-rn/dist/components/Card/CardContent';

const TravelLanding = () => {
	return (
		<div className='bg-capstonegray-900'>
			<Navbar variant='primary'>
				<NavbarLink href='/travel'>Travel</NavbarLink>
				<NavbarLink href='/rail'>Rail</NavbarLink>
				<NavbarLink href='/' hasIcon='true'>
					EN
				</NavbarLink>
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
					{' '}
					<Typography variant='heading-2'>A Galaxy of fun</Typography>
					<Typography variant='body'>
						Our interstellar travel service is unparalleled. Truly.
					</Typography>
					<p>SEARCH</p>
				</Hero>
				<section className='container'>
					<div className='text-capstoneteal-200'>
						<Typography variant='heading-3'>Popular Destinations</Typography>
					</div>
					<div className='flex gap-8'>
						<Card>
							<CardMedia image='https://images.unsplash.com/photo-1621944670190-fb7116a36943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia image='https://images.unsplash.com/photo-1474710820418-dd5406ee35d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia image='https://images.unsplash.com/photo-1621944670190-fb7116a36943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
						<Card>
							<CardMedia image='https://images.unsplash.com/photo-1621944670190-fb7116a36943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
							<CardContent>
								<Typography variant='subtitle-1'>Planet Break</Typography>
								<Typography variant='body'>
									Travel Off-world in style
								</Typography>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>
		</div>
	);
};

export default TravelLanding;
