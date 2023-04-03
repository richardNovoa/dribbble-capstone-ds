import { Footer } from '../lib/components/Footer';

export default {
	title: 'Components/Footer',
	component: Footer,
	args: {
		brand: 'world'
	},
	argTypes: {
		brand: { control: 'select', options: ['world', 'ride', 'visit'] }
	}
};

export function Default(args) {
	return <Footer {...args}></Footer>;
}
