import { Card } from '../lib/components/Card';

export default {
	title: 'Components/Card',
	component: Card,
	args: {
		size: 'lg',
		variant: 'flat',
		src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80',
		title: 'This is a title dscskldncskldn csndklcns',
		description: 'this is a description',
		alt: 'this is an alt message',
		hasCta: false,
		ctaLabel: 'ctaLabel',
		ctaHref: '#'
	},
	argTypes: {
		size: { control: 'select', options: ['sm', 'md', 'lg'] },
		variant: { control: 'select', options: ['flat', 'surface'] },
		title: { control: 'text' },
		description: { control: 'text' },
		src: { control: 'text' },
		alt: { control: 'text' }
	}
};

export function Default(args) {
	return (
		<div className='bg-black p-4 flex gap-2'>
			<Card {...args}></Card>
		</div>
	);
}

