import { Banner } from '../lib/components/Banner';

export default {
	title: 'Components/Banner',
	component: Banner,
	args: { brand: 'world' },
	argTypes: {
		brand: { control: 'select', options: ['world', 'ride', 'visit'] }
	}
};

export function Default(args) {
	return <Banner {...args} />;
}

Default.args = {};
