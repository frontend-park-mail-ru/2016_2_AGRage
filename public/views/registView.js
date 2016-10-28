(function() {
	'use strict';

	const Button = window.Button;
	const View = window.View;
	const Form = window.Form;

	class registerView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.js-regist');
			this.createElements();
			this.addElements();
			this.addListeners();
			this.hide();
		}

		createElements() {
			this.registForm = new Form({
				el: document.createElement('div'),
				data: {
					title: 'AGRage',
					fields: [{
						name: 'user',
						type: 'text',
						placeholder: "Введите ваш логин",
						maxlength: "25",
						minlength: "5",
						required: "required"
					}, {
						name: 'email',
						type: 'email',
						placeholder: "Введите ваш email",
						required: "required"
					}, {
						name: 'password',
						type: 'password',
						placeholder: "Веедите ваш пароль",
						maxlength: "25",
						minlength: "6",
						required: "required"
					}],
					controls: [{
						text: 'Зарегистрироваться',
						attrs: {
							type: 'submit'
						}
					}]
				}
			});
		}

		addElements() {
			this._el.appendChild(this.registForm._get());
		}

		addListeners() {
			this.registForm._get().addEventListener('submit', event => {
				console.log('click regist');
				this.router.go('/menu');
			});

		}
	}

	window.registView = registerView;
}());
