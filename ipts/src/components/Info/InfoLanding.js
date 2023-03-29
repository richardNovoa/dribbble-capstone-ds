import Hero from '../common_components/Hero';
import About from '../Info/About';
import News from '../Info/News';

import Navbar from 'capstone-ds-rn/dist/components/Navbar/Navbar';
import Footer from 'capstone-ds-rn/dist/components/Footer';
import NavbarLink from 'capstone-ds-rn/dist/components/Navbar/NavbarLink';
import Card from 'capstone-ds-rn/dist/components/Card/Card';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import CardMedia from 'capstone-ds-rn/dist/components/Card/CardMedia';
import CardContent from 'capstone-ds-rn/dist/components/Card/CardContent';
import Button from 'capstone-ds-rn/dist/components/Button';
import Info from 'capstone-ds-rn/dist/components/Info';

const InfoLanding = () => {
	return (
		<div>
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
			<Hero
				src='https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
				alt='hero image'
			/>
			<div className='p-10 flex gap-4 justify-center'>
				<Card variant='sm'>
					<CardMedia
						variant='sm'
						image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
					/>
					<CardContent variant='sm'>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card variant='sm'>
					<CardMedia
						variant='sm'
						image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
					/>
					<CardContent variant='sm'>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card variant='sm'>
					<CardMedia
						variant='sm'
						image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
					/>
					<CardContent variant='sm'>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card variant='sm'>
					<CardMedia
						variant='sm'
						image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
					/>
					<CardContent variant='sm'>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card variant='sm'>
					<CardMedia
						variant='sm'
						image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
					/>
					<CardContent variant='sm'>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
			</div>
			<About />
			<p>Planets we visit</p>
			<Info
				variant='img-left'
				image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'>
				<div>
					<Typography variant='heading-3'>Title</Typography>
					<Typography variant='body'>Description</Typography>
				</div>
				<div>
					<Typography variant='heading-3'>Title</Typography>
					<Typography variant='body'>Description</Typography>
				</div>
			</Info>
			<Info
				variant='img-right'
				image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'>
				<div>
					<Typography variant='heading-3'>Title</Typography>
					<Typography variant='body'>Description</Typography>
				</div>
				<div>
					<Typography variant='heading-3'>Title</Typography>
					<Typography variant='body'>Description</Typography>
					<Button>Hello World</Button>
				</div>
			</Info>

			<News />
			<div className='p-10 flex gap-4 justify-center'>
				<Card>
					<CardMedia image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80' />
					<CardContent>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card>
					<CardMedia image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80' />
					<CardContent>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card>
					<CardMedia image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80' />
					<CardContent>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
				<Card>
					<CardMedia image='https://images.unsplash.com/photo-1586999082731-574a06ec7e25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80' />
					<CardContent>
						<Typography variant='subtitle-1'>Title</Typography>
						<Typography variant='body'>Description</Typography>
					</CardContent>
				</Card>
			</div>
			<p>call to action</p>

			<Footer />
		</div>
	);
};

export default InfoLanding;
