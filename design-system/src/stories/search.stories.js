import { SearchFields } from '../lib/components/Search';

export default {
	title: 'Components/Search',
	component: SearchFields,
	args: { brand: 'world' },

	argTypes: {
		brand: { control: 'select', options: ['world', 'visit', 'ride'] }
	}
};

export function Default(args) {
	return (
		<div className='bg-black p-20 w-1/2'>
			<SearchFields {...args}></SearchFields>
		</div>
	);
}

Default.args = {};
