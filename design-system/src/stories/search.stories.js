import { Search } from '../lib/components/Search';

export default {
	title: 'Components/Search',
	component: Search,
	args: { brand: 'world' },

	argTypes: {
		brand: { control: 'select', options: ['world', 'visit', 'ride'] }
	}
};

export function Default(args) {
	return <Search {...args}></Search>;
}

Default.args = {};
