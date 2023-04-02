import { Card } from '../lib/components/Card';

export default {
	title: 'Components/Card',
	component: Card,
	args: {
		brand: 'world',
		size: 'lg',
		layout: 'default',
		src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
		title: 'This is a title',
		description: 'this is a description',
		alt: 'this is an alt message'
	},
	argTypes: {
		brand: { control: 'select', options: ['world', 'ride', 'visit'] },
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		layout: { control: 'select', options: ['default', 'alt'] },
		title: { control: 'text' },
		description: { control: 'text' },
		src: { control: 'text' },
		alt: { control: 'text' }
	}
};

export function Default(args) {
	return <Card {...args}></Card>;
}

