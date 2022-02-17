export class SpiralSort {
	constructor(array2d) {
		this._array = array2d;
	}

	sort() {
		let result = [];

		let row = 0;
		let column = 0;
		let width = this._array[0].length;
		let height = this._array.length;
		let maxWidth = this._array[0].length;
		let maxHeight = this._array.length;
		let dir = 'right';

		let counter = 0;
		while (result.length <= maxHeight * maxWidth && counter < 2) {
			counter++;
			while (column < width) {
				result.push(this._array[row][column]);

				if (column === width - 1) {
					dir = 'down';
					row++;
				} else column++;
			}

			while (row < height) {
				result.push(this._array[row][column]);
				if (row === height - 1) {
					dir = 'left';
					column--;
					height--;
				}
				row++;
			}

			// while (column >= maxWidth - width) {
			// 	result.push(this._array[row][column]);
			// 	if (column === maxWidth - width) {
			// 		dir = 'up';
			// 		row--;
			// 		width--;
			// 	} else column--;
			// }
			// while (row >= maxHeight - height) {
			// 	result.push(this._array[row][column]);
			// 	if (row === maxHeight - height) {
			// 		dir = 'right';
			// 		column++;
			// 	} else row--;
			// }
		}

		return result;
	}

	moveHorizontal(row) {}
}

//array=[1,2,3,4,5,6,7,8,9]
