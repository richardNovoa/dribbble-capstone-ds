import { Card } from '../lib/components/Card';
export default {
	title: 'Components/Card',
	component: Card
};

export const Default = () => <Card>search the stars</Card>;

const Template = (args) => <Card {...args} />;
