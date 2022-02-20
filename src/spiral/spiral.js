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
		const finalLength = this._array.length * this._array[0].length;
		let col = 0;
		let row = 0;

		while (result.length < finalLength) {
			//to right
			for (let i = colStart; i <= colEnd && result.length < finalLength; i++) {
				result.push(this._array[row][col]);

				if (col === colEnd) {
					row++;
					colEnd--;
				} else col++;
			}
			//down
			for (let i = row; i <= rowEnd && result.length < finalLength; i++) {
				result.push(this._array[row][col]);
				if (row === rowEnd) {
					col--;
					rowStart++;
					// rowEnd--;
				} else row++;
			}

			//left
			for (let i = col; i >= colStart && result.length < finalLength; i--) {
				result.push(this._array[row][col]);

				if (col === colStart) {
					row--;
					colStart++;
				} else col--;
			}
			//up

			for (let i = row; i >= rowStart && result.length < finalLength; i--) {
				result.push(this._array[row][col]);
				if (row === rowStart) {
					col++;
					rowEnd--;
				} else row--;
			}
		}

		console.log('🚀 ~ sort ~ result', result);
		return result;
	}
}
