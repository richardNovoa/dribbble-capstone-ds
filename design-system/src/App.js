import { Navbar, NavbarLink } from './lib/components/Navbar';
function App() {
	return (
		<div className='flex flex-col gap-4'>
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
		</div>
	);
}

export default App;
