import { SearchResult } from '../lib/components/SearchResult';

export default {
	title: 'Components/SearchResult',
	component: SearchResult,
	args: {
		type: 'ride',
		title: 'Ramada by Wyndham Miami Springs/Miami',
		subtitle: 'Breakfast Included',
		status: 'fully refundable',
		rating: '7.5',
		reviews: '3,135',
		price: '9912009',
		time: '95',
		distance: '240',
		imgSrc:
			'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80'
	}
};

export function Default(args) {
	return (
		<div className='bg-midnight-1000 w-1/2 p-10'>
			<SearchResult {...args} />
		</div>
	);
}

Default.args = {};


