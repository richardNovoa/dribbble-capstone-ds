import InfoLanding from './components/Info/InfoLanding';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TravelLanding from './components/travel/TravelLanding';
import RailLanding from './components/rail/RailLanding';

const router = createBrowserRouter([
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
]);

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
