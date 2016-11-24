(function () {
	'use strict';

	class Tower {

		/**
		 * Конструктор класса Tower
		 */
		constructor ({x = 1100, y = 60}) {
			this.x = x;
			this.y = y;
		}


		// checkRectangleIntersection ({width, height}, action = 'relect') {
		// 	let result = {};
		// 	if (this.x + 100 > width || this.x < 0) {
		// 		result.x = true;			}

		// 	/* if (this.y + this.r > height || this.y - this.r < 0) {
		// 		result.y = true;
		// 	} */

		// 	this[action](result);
		// } 



		destroy (axis) {
			if (axis.x || axis.y) {
				this.toDestroy = true;
			}
		}

		reflect (axis) {
			Object.keys(axis).forEach(dem => {
				if (axis[dem]) {
					this[`v${dem}`] *= -1;
				}
			})
		}

		draw (ctx) {
			ctx.beginPath();

			var image = new Image();
			image.src = "tower.png"; 

			ctx.drawImage(image, this.x, this.y, 180, 360);
			ctx.closePath();
		}


	}

	//export
	window.Tower = Tower;
})();
