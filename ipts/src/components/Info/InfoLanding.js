import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import News from './News';
import Footer from './Footer';

const InfoLanding = () => {
	return (
		<div>
			<Navbar>Navbar</Navbar>
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
