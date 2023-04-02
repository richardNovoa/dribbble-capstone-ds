import Button from '../lib/components/Button';
export default {
	title: 'Components/Button',
	component: Button
};

export const Default = () => <Button>search the stars</Button>;

const Template = (args) => <Button {...args} />;
