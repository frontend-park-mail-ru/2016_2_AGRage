(function () {
	'use strict';

	class Tower {

		/**
		 * Конструктор класса Tower
		 */
		constructor ({x = 1100, y = 60, hp =1000}) {
			this.x = x;
			this.y = y;
			this.hp = hp;
		}


		checkRectangleIntersection ({width, height}, action = 'reflect', coord) {
			let result = {};
			
			if(this.hp == 0){
				result.x = false;
			}
			else if (coord + 280 > width || coord < 0) {
				result.x = true;	
				this.hp -= 100;		
			}
			else result.x = false;

			// if (coord + 280 > width || coord < 0) {
			// 	result.x = true;	
			// 	this.hp -= 100;		
			// }
			// if(this.hp < 0){
			// 	result.x = false;
			// }
			console.log(this.hp);
			this[action](result);
		}



		// checkNull(){
		// 	if(this.hp == 0){
		// 		console.log(this.hp);
		// 		return false;
		// 	}
		// 	console.log(this.hp);
		// 	return true;
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
