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

			let myData = {
				email: "maranovfna@mail.ru",
				login: "marianofvna",
				password: "12556"
			};
			
			let myUser = new User(myData);

			myUser.sendRequest('/registration', 'POST', JSON.stringify(myData))
				.then(() => {
					console.log(myUser.responseObj.msg);
					//document.querySelector('form.register').classList.remove('loading');
					//this.formRegister.createMess('success', this.user.responseObj.msg);
					//myUser.isAuth = 1;
					//myUser.login = this.user.responseObj.msg;
					//this.router.go('/');
				})
				.catch(() => {
					//document.querySelector('form.register').classList.remove('loading');
					//this.formRegister.createMess('error', this.user.responseObj.msg);
					//Object.keys(this.formRegister.getFormData()).forEach((field) => {
					//this.formRegister.el.querySelector(`input[name=${field}]`).parentNode.classList.add('error');
					//});
					console.log('Ошибка отправки запроса на сервер!');
				});
		}

		createElements() {
			this.registForm = new Form({
				el: document.createElement('div'),
				data: {
					title: 'AGRage',
					titleClass: "title",
					fields: [{
						name: 'user',
						type: 'text',
						placeholder: "Введите ваш логин",
						maxlength: "25",
						minlength: "5",
						required: "required",
						class: "form"
					}, {
						name: 'email',
						type: 'email',
						placeholder: "Введите ваш email",
						required: "required",
						class: "form"
					}, {
						name: 'password',
						type: 'password',
						placeholder: "Веедите ваш пароль",
						maxlength: "25",
						minlength: "6",
						required: "required",
						class: "form"
					}],
					controls: [{
						text: 'Зарегистрироваться',
						class: "loginButton",
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
