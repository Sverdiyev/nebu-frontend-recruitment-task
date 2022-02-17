export class SpiralSort {
	constructor(array2d) {
		this._array = array2d;
	}

	sort() {
		let result = [];

		let colStart = 0;
		let colEnd = this._array[0].length - 1;
		let rowStart = 0;
		let rowEnd = this._array.length - 1;

		let col = 0;
		let row = 0;

		let counter = 0;
		while (result.length <= 25 && counter < 2) {
			counter++;
			while (col <= colEnd && row === rowStart) {
				result.push(this._array[row][col]);

				if (col === colEnd) {
					row++;
					colEnd--;
				} else col++;
			}

			while (row <= rowEnd && col === colEnd) {
				result.push(this._array[row][col]);
				if (row === rowEnd) {
					col--;
					rowEnd--;
				}
				row++;
			}

			// while (col >= maxWidth - width) {
			// 	result.push(this._array[row][col]);
			// 	if (col === maxWidth - width) {
			// 		dir = 'up';
			// 		row--;
			// 		width--;
			// 	} else col--;
			// }
			// while (row >= maxHeight - height) {
			// 	result.push(this._array[row][col]);
			// 	if (row === maxHeight - height) {
			// 		dir = 'right';
			// 		col++;
			// 	} else row--;
			// }
		}

		return result;
	}

	moveHorizontal(row) {}
}

//array=[1,2,3,4,5,6,7,8,9]
