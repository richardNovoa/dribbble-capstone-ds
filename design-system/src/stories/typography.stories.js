import Typography from '../lib/components/Typography';

export default {
	title: 'Components/Typography',
	component: Typography,
	args: {
		variant: 'body',
		children: 'Lorem ipsum'
	},
	argTypes: {
		variant: {
			control: 'radio',
			options: [
				'heading-1',
				'heading-2',
				'heading-3',
				'subtitle-1',
				'body',
				'caption'
			]
		}
	}
};

export function Default(args) {
	return <Typography {...args}>{args.children}</Typography>;
}

Default.args = {};
