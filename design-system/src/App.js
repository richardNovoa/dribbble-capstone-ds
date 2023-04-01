import Navbar from './lib/components/Navbar/Navbar';
import Footer from './lib/components/Footer';
import NavbarLink from './lib/components/Navbar/NavbarLink';
import Card from './lib/components/Card/Card';
import Typography from './lib/components/Typography';
import CardMedia from './lib/components/Card/CardMedia';
import CardContent from './lib/components/Card/CardContent';
import Button from './lib/components/Button';
import DisplayImage from './lib/components/DisplayImage';
import Banner from './lib/components/Banner';

function App() {
	return (
		<div>
			<h1>Styleguide Title</h1>
			<p>Navbar</p>
			<Navbar>
				<NavbarLink>How are you</NavbarLink>
			</Navbar>
			<p>Display Image</p>
			<p>Card</p>
			<p>Typography</p>
			<p>Decorative</p>
			<p>Footer</p>
		</div>
	);
}

export default App;
