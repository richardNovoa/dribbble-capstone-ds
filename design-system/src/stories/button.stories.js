import { Button } from '../lib/components/Button';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button'
	}
};

export function Default(args) {
	return <Button>{args.children}</Button>;
}

Default.args = {};