import type { PageLoad } from './$types';
import { categories } from '$lib/data/index';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const category = categories.find((c) => c.id === params.category);
	if (!category) error(404, 'Category not found');
	return { category };
};
