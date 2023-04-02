import Button from './lib/components/Button';
import { Navbar, NavbarLink } from './lib/components/Navbar';
import Typography from './lib/components/Typography';
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
		</div>
	);
}

export default App;
