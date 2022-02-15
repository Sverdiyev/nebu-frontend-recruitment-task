import { SpiralSort } from './spiral';
const arrayRange = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
it('Works for 3x3 array', () => {
	const arr = [
		[1, 2, 3],
		[8, 9, 4],
		[7, 6, 5]
	];
	const s = new SpiralSort(arr);

	expect(s.sort()).toEqual(arrayRange(1,9));

});

it('Works for 4x4 array', () => {
	const arr = [
		[1, 2, 3, 4],
		[12, 13, 14, 5],
		[11, 16, 15, 6],
		[10, 9, 8, 7],
	];
	const s = new SpiralSort(arr);

	expect(s.sort()).toEqual(arrayRange(1,16));

});

it('Works for 5x5 array', () => {
	const arr = [
		[1,  2,  3,  4,  5],
		[16, 17, 18, 19, 6],
		[15, 24, 25, 20, 7],
		[14, 23, 22, 21, 8],
		[13, 12, 11, 10, 9],
	];
	const s = new SpiralSort(arr);

	expect(s.sort()).toEqual(arrayRange(1,25));

});

