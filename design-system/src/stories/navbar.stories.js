import { Navbar, NavbarLink } from '../lib/components/Navbar';
export default {
	title: 'Components/Navbar',
	component: Navbar,
	args: {
		brand: 'world',
		hasSecondary: true
	},
	argTypes: {
		brand: { control: 'select', options: ['world', 'ride', 'visit'] },
		hasSecondary: { control: 'boolean' }
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
