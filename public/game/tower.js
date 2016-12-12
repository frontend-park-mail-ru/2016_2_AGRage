(function () {
	'use strict';

	class Tower {

		/**
		 * Конструктор класса Tower
		 */
		constructor ({x = 1100, y = 60, hp =1000, counter = 0}) {
			this.x = x;
			this.y = y;
			this.hp = hp;
			this.counter = counter;
		}


		checkRectangleIntersection ({width, height}, action = 'reflect', coord) {
			let result = {};
			
			if(this.counter >= 2000){
				if(this.hp == 0){
					result.x = false;
				}
				else if (coord + 280 > width || coord < 0) {
					result.x = true;	
					this.hp -= 100;	
					//this.update(2000);
				
					console.log(this.hp);	
				}
				else result.x = false;
				
				this.counter = 0;
			}

			// if (coord + 280 > width || coord < 0) {
			// 	result.x = true;	
			// 	this.hp -= 100;		
			// }
			// if(this.hp < 0){
			// 	result.x = false;
			// }
			
			this[action](result);
		}

		getHp(){
			return this.hp;
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

		drawHp(ctx){

			ctx.fillStyle = "red";
			ctx.fillRect(1140, 20, (this.hp / 10), 20);
		}

		update (dt) {
			this.hp -= 0.01 * dt;
			//this.y += this.vy * dt;
		}

		incrementCounter(dt){
			this.counter += dt;
		}

		getCounter(){
			return this.counter;
		}
	}

	//export
	window.Tower = Tower;
})();
