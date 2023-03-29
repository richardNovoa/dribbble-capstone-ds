import Navbar from './lib/components/Navbar/Navbar';
import Footer from './lib/components/Footer';
import NavbarLink from './lib/components/Navbar/NavbarLink';
import Card from './lib/components/Card/Card';
import Typography from './lib/components/Typography';
import CardMedia from './lib/components/Card/CardMedia';
import CardContent from './lib/components/Card/CardContent';
import Button from './lib/components/Button';
import Info from './lib/components/Info';

function App() {
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
}

export default App;
