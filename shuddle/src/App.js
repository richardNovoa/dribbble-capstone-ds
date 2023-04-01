import Navbar from 'capstone-ds-rn/dist/components/Navbar/Navbar';
import NavbarLink from 'capstone-ds-rn/dist/components/Navbar/NavbarLink';
import Typography from 'capstone-ds-rn/dist/components/Typography';
import Card from 'capstone-ds-rn/dist/components/Card/Card';
import CardMedia from 'capstone-ds-rn/dist/components/Card/CardMedia';

function App() {
	return (
		<div>
			<div className='py-10'>
				<Navbar variant='primary'>
					<NavbarLink>Hello world</NavbarLink>
					<NavbarLink>Hello world</NavbarLink>
					<NavbarLink>Hello world</NavbarLink>
				</Navbar>
				<Navbar variant='secondary'>
					<NavbarLink>Hello world</NavbarLink>
					<NavbarLink>Hello world</NavbarLink>
					<NavbarLink>Hello world</NavbarLink>
				</Navbar>
			</div>
			<div className='py-10'>
				<Card></Card>
			</div>
		</div>
	);
}

export default App;
