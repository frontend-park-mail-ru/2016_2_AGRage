(function () {
	'use strict';

	class Ball {

		/**
		 * Конструктор класса Ball
		 */
		constructor ({x = 100, y = 280, color = '#0095DD', vx = 0}) {
			this.vx = vx;
			this.x = x;
			this.y = y;

			this.color = color;
		}

		dv ({vx = 0, vy = 0}) {
			this.vx += vx;
			//this.vy += vy;
		}

		update (dt) {
			this.x += this.vx * dt;
			//this.y += this.vy * dt;
		}

		checkRectangleIntersection ({width, height}, action = 'relect') {
			let result = {};
			if (this.x + 100 > width || this.x - 100 < 0) {
				result.x = true;			}

			/* if (this.y + this.r > height || this.y - this.r < 0) {
				result.y = true;
			} */

			this[action](result);
		} 



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
			/* ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath(); */

			//var canvas = document.getElementById("canvas");
			//var image = document.getElementById("unit1.png");
			var image = new Image();
			image.src = "unit1.png"; 

			ctx.drawImage(image, this.x, this.y, 100, 100);
			ctx.closePath();
		}


	}

	//export
	window.Ball = Ball;
})();
