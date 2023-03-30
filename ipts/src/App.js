import InfoLanding from './components/Info/InfoLanding';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import TravelLanding from './components/travel/TravelLanding';
import RailLanding from './components/rail/RailLanding';

const router = createHashRouter(
	[
		{
			path: '/',
			element: <InfoLanding />
		},
		{
			path: '/travel',
			element: <TravelLanding />
		},
		{
			path: '/rail',
			element: <RailLanding />
		}
	],
	{ basename: '/' }
);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
