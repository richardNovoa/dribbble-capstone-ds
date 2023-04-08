import { Button } from '../lib/components/Button';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button',
		type: 'primary'
	},
	argTypes: {
		children: { control: 'text' },
		type: { control: 'select', options: ['primary', 'secondary'] }
	}
};

export function Default(args) {
	return <Button {...args}>{args.children}</Button>;
}

Default.args = {};