import Logo from '../lib/components/Logo';

export default {
	title: 'Components/Logo',
	component: Logo,
	args: {
		brand: 'world'
	},
	argTypes: {
		brand: { control: 'select', options: ['world', 'ride', 'visit', 'ipts'] }
	}
};

export function Default(args) {
	return (
		<div className='bg-black p-10'>
			<Logo {...args}></Logo>
		</div>
	);
}
