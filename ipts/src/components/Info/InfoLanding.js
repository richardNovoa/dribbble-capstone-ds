import Navbar from '../_design-system/Navbar';
import Hero from './Hero';
import About from './About';
import News from './News';
import Footer from '../_design-system/Footer';
import Navbar_Link from '../_design-system/Navbar_Link';

const InfoLanding = () => {
	return (
		<div>
			<Navbar variant='primary'>
				<Navbar_Link>Travel</Navbar_Link>
				<Navbar_Link>Rail</Navbar_Link>
				<Navbar_Link hasIcon='true'>EN</Navbar_Link>
			</Navbar>
			<Navbar variant='secondary'>
				<Navbar_Link>Travel</Navbar_Link>
				<Navbar_Link>Rail</Navbar_Link>
				<Navbar_Link hasIcon='true'>EN</Navbar_Link>
			</Navbar>
			<Hero />
			<About />
			<p>Planets we visit</p>
			<News />
			<p>call to action</p>
			<Footer />
		</div>
	);
};

export default InfoLanding;
