import { Divider } from '../lib/components/Divider';

export default {
	title: 'Components/Divider',
	component: Divider,
	args: {
		direction: 'down'
	},
	argTypes: {
		direction: { control: 'radio', options: ['up', 'down'] }
	}
};

export function Default(args) {
	return (
		<div className='bg-midnight-1000'>
			<Divider {...args}></Divider>;
		</div>
	);
}

Default.args = {};
