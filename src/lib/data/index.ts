import type { Category } from '$lib/types';
import layout from './layout';
import flexbox from './flexbox';
import grid from './grid';
import spacing from './spacing';
import sizing from './sizing';
import typography from './typography';
import backgrounds from './backgrounds';
import borders from './borders';
import effects from './effects';
import filters from './filters';
import transitions from './transitions';
import transforms from './transforms';
import interactivity from './interactivity';
import svg from './svg';
import accessibility from './accessibility';

export const categories: Category[] = [
	layout,
	flexbox,
	grid,
	spacing,
	sizing,
	typography,
	backgrounds,
	borders,
	effects,
	filters,
	transitions,
	transforms,
	interactivity,
	svg,
	accessibility
];
