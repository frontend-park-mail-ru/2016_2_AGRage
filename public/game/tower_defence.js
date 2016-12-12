(function () {
	'use strict';

	const Unit1 = window.Unit1;
	const keyMaster = window.keyMaster;
	const Tower = window.Tower;


	class Tower_defence {

		/**
		 * Конструктор класса Form
		 */
		constructor ({ctx, width, height}) {
			this.ctx = ctx;
			this.width = width;
			this.height = height;

			this.unit1 = new Unit1({});
			this.tower = new Tower({});

			this.readyToShot = true;
			this.bullets = [];

			this.key = new keyMaster();
		}

		/**
		 * Начало новой игры
		 */

		start () {
			this._stopped = false;
			this.key.init();
			this.startLoop();
		}

		isStopped () {
			return this._stopped;
		}

		/**
		 * Начинаем крутить петлю
		 */
		startLoop () {
			let time,
				isStopped =  this.isStopped.bind(this),
				exec = this.exec.bind(this);

			function step () {
			    var now = Date.now(),
			        dt = now - (time || now);

			    time = now;

				if (!isStopped()) {
					requestAnimationFrame(step);
				}
				//console.log(dt);
				exec(dt);
			}

			step();
		}

		clear () {
			this.ctx.clearRect(0, 0, this.width, this.height);
		}

		/**
		 * Обрабатываем текущий момент
		 * @param  {number} dt
		 */
		exec (dt) {
			let keys = this.keys;
			this.clear();

			this.bullets.forEach(bullet => {
				bullet.update(dt);
				bullet.checkRectangleIntersection({
					width: this.width,
					height: this.height
				}, 'destroy');

				bullet.draw(this.ctx);
			});

			this.tower.incrementCounter(dt);
			this.unit1.update(dt);
			this.unit1.sprite.update(dt);

			this.checkControl();
			this.unit1.checkRectangleIntersection({
				width: this.width,
				height: this.height
			}, 'reflect');


			this.tower.checkRectangleIntersection({
					width: this.width,
					height: this.height
				}, 'reflect', this.unit1.coordinate());



		    this.unit1.draw(this.ctx);
		    this.tower.draw(this.ctx);
		    this.tower.drawHp(this.ctx);

			this.collectGarbage();
		}

		collectGarbage () {
			this.bullets.forEach((bullet, index, arr) => {
				if(bullet.toDestroy) {
					arr.splice(index, 1);
				}
			});
		}

		createBullet () {
			if (!this.readyToShot) {
				return;
			}

			this.readyToShot = false;
			this.bullets.push(new Unit1({
				color: '#' + technolibs.colorHash('bullet' + Date.now()),
				r: 10,
				x: this.unit1.x,
				y: this.unit1.y,
				vx: this.unit1.vx * 5,
				vy: this.unit1.vy * 5
			}));

			setTimeout(() => this.readyToShot = true, 300);
		}

		checkControl () {
			if (this.key.is('w')) {
				this.unit1.dv({vy: -0.01});
			}

			if (this.key.is('s')) {
				this.unit1.dv({vy: 0.01});
			}

			if (this.key.is('d')) {
				this.unit1.dv({vx: 0.01});
			}

			if (this.key.is('a')) {
				this.unit1.dv({vx: -0.01});
			}

			if (this.key.is(' ')) {
				this.createBullet();
			}
		}

	}

	//export
	window.Tower_defence = Tower_defence;
})();
