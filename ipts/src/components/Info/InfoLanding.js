import Navbar from '../_design-system/components/Navbar/Navbar';
import Hero from './Hero';
import About from './About';
import News from './News';
import Footer from '../_design-system/components/Footer';
import NavbarLink from '../_design-system/components/Navbar/NavbarLink';
import Card from '../_design-system/components/Card/Card';
import Typography from '../_design-system/components/Typography';
import CardMedia from '../_design-system/components/Card/CardMedia';
import CardContent from '../_design-system/components/Card/CardContent';

const InfoLanding = () => {
	return (
		<div>
			<Navbar variant='primary'>
				<NavbarLink href='#'>Travel</NavbarLink>
				<NavbarLink href='#'>Rail</NavbarLink>
				<NavbarLink href='#' hasIcon='true'>
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
			<Hero />
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
