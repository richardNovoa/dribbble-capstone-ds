import {
	FilterCategory,
	FilterOption,
	SearchFilter
} from '../lib/components/SearchFilter';

export default {
	title: 'Components/SearchFilter',
	component: SearchFilter,
	args: {
		children: 'SearchFilter'
	}
};

export function Default(args) {
	return (
		<div className='bg-midnight-1000'>
			<SearchFilter>
				<FilterCategory title='test'>
					<FilterOption>Test</FilterOption>
					<FilterOption>Test</FilterOption>
					<FilterOption>Test</FilterOption>
					<FilterOption>Test</FilterOption>
				</FilterCategory>
			</SearchFilter>
		</div>
	);
}

Default.args = {};
