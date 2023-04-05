import { Button } from './lib/components/Button';
import { Card } from './lib/components/Card';
import { Footer } from './lib/components/Footer';
import { Navbar, NavbarLink } from './lib/components/Navbar';
import Typography from './lib/components/Typography';
import Logo from './lib/components/Logo';
import { Divider } from './lib/components/Divider';

function App() {
	return (
		<div className='flex flex-col gap-4'>
			<Typography variant='heading-2' className='mp-4'>
				Navbar
			</Typography>
			<Navbar hasSecondary brand='world'>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
			</Navbar>
			<Navbar hasSecondary brand='visit'>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
			</Navbar>
			<Navbar hasSecondary brand='ride'>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
				<NavbarLink>Hello</NavbarLink>
			</Navbar>
			<div>
				<Typography variant='heading-2' className='mb-4'>
					Button
				</Typography>
				<Button>Search the Stars</Button>
			</div>
			<div>{/* <Logo brand='world' /> */}</div>
			<div>
				<Typography variant='heading-2' className='mb-4'>
					Card
				</Typography>
			</div>
			<div>
				<Typography variant='heading-1'>Heading 1</Typography>
				<Typography variant='heading-2'>Heading 2</Typography>
				<Typography variant='heading-3'>Heading 3</Typography>
				<Typography variant='subtitle-1'>Subtitle 1</Typography>
				<Typography variant='body'>Body</Typography>
			</div>
			<div>
				<Card brand='world' size='lg'></Card>
				<Card brand='visit' size='lg'></Card>
				<Card brand='ride' size='lg'></Card>
				<Card brand='world' size='md'></Card>
				<Card brand='visit' size='md'></Card>
				<Card brand='ride' size='md'></Card>
				<Card brand='world' size='sm'></Card>
				<Card brand='visit' size='sm'></Card>
				<Card brand='ride' size='sm'></Card>
			</div>
			<div className='bg-midnight-1000'>
				<Divider brand='world' direction='left' />
				<Divider brand='world' direction='right' />
				<Divider brand='visit' direction='right' />
				<Divider brand='ride' direction='right' />
			</div>
			<Footer brand='world' />
			<Footer brand='visit' />
			<Footer brand='ride' />
		</div>
	);
}

export default App;
