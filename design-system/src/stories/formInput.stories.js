import { FormInput } from '../lib/components/FormInput';

export default {
	title: 'Components/FormInput',
	component: FormInput,
	args: {
		children: 'Departing From'
	}
};

export function Default(args) {
	return <FormInput {...args}>{args.children}</FormInput>;
}

Default.args = {};
