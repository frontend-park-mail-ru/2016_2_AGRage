(function() {
	'use strict';

	const Button = window.Button;
	const View = window.View;
	const Form = window.Form;
	const Model = window.Model;
	const User = window.User;

	class loginView extends View {
		constructor(options = {}) {
			super(options);
			this._el = document.querySelector('.js-login');
			this.createElements();
			this.addElements();
			this.addListeners();
			this.hide();

		}

		createElements() {
			this.loginForm = new Form({
				el: document.createElement('div'),
				data: {
					title: 'AGRage',
					fields: [{
						name: 'login',
						type: 'text',
						placeholder: "Enter your login",
						maxlength: "25",
						minlength: "5",
						required: "required",
						class: "pink"
					}, {
						name: 'password',
						type: 'password',
						placeholder: "Enter your password",
						maxlength: "25",
						minlength: "5",
						required: "required",
						class: "pink"
					}],
					controls: [{
						text: 'Войти',
						class: "pink",
						attrs: {
							type: 'submit'
						}
					}]
				}
			});
		}

		addElements() {
			this._el.appendChild(this.loginForm._get());
		}

		addListeners() {
			this.loginForm._get().addEventListener('submit', event => {
				console.log('click login');
				this.router.go('/menu');
			});

		}
	}

	window.loginView = loginView;
}());
