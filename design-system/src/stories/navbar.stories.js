import { Navbar, NavbarLink } from '../lib/components/Navbar';
export default {
	title: 'Components/Navbar',
	component: Navbar
};

export const Default = () => (
	<Navbar hasSecondary brand='world'>
		<NavbarLink>Hello</NavbarLink>
		<NavbarLink>Hello</NavbarLink>
		<NavbarLink>Hello</NavbarLink>
	</Navbar>
);

const Template = (args) => <Navbar {...args} />;
