import { Navbar, NavbarLink } from './lib/components/Navbar';
function App() {
	return (
		<div>
			<Navbar hasSecondary brand='world'>
				<NavbarLink>Hello</NavbarLink>
			</Navbar>
			<Navbar hasSecondary brand='visit'>
				<NavbarLink>Hello</NavbarLink>
			</Navbar>
			<Navbar hasSecondary brand='ride'>
				<NavbarLink>Hello</NavbarLink>
			</Navbar>
		</div>
	);
}

export default App;
