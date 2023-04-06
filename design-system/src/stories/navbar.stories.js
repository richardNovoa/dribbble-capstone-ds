import { Navbar, NavbarLink } from '../lib/components/Navbar';
export default {
	title: 'Components/Navbar',
	component: Navbar,
	args: {
		brand: 'world',
		hasSecondary: true,
		isProd: false
	},
	argTypes: {
		brand: { control: 'select', options: ['world', 'ride', 'visit'] },
		hasSecondary: { control: 'boolean' },
		isProd: { control: 'select', options: [true, false] }
	}
};

export const Default = (args) => (
	<Navbar {...args}>
		<NavbarLink>Hello</NavbarLink>
		<NavbarLink>Hello</NavbarLink>
		<NavbarLink>Hello</NavbarLink>
	</Navbar>
);

const Template = (args) => <Navbar {...args} />;
