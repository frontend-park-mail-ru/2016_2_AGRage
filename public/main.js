(function() {
	'use strict';

	if (typeof window === 'object') {

		//import
		let Button = window.Button;
		let Chat = window.Chat;
		let Form = window.Form;

		let loginPage = document.querySelector('.js-login');
		let registPage = document.querySelector('.js-regist');
		let chatPage = document.querySelector('.js-chat');

		let loginForm = new Form({
			el: document.createElement('div'),
			data: {
				title: 'Login',
				fields: [{
					name: 'user',
					type: 'text',
					placeholder: "Enter your name",
					maxlength: "25",
					minlength: "5",
					required: "required"
				}, {
					name: 'email',
					type: 'email',
					placeholder: "Enter your email",
					maxlength: "25",
					minlength: "5",
					required: "required"
				}],
				controls: [{
					text: 'Войти',
					attrs: {
						type: 'submit'
					}
				}]
			}
		});
		let registForm = new Form({
			el: document.createElement('div'),
			data: {
				title: 'Registration',
				fields: [{
					name: 'user',
					type: 'text',
					placeholder: "Enter your name",
					maxlength: "25",
					minlength: "5",
					required: "required"
				}, {
					name: 'email',
					type: 'email',
					placeholder: "Enter your email",
					required: "required"
				}, {
					name: 'password',
					type: 'password',
					placeholder: "Enter your password",
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
		let chat = new Chat({
			el: document.createElement('div'),
		});

		loginForm.on('submit', event => {
			event.preventDefault();

			let formData = loginForm.getFormData();
			//technolibs.request('/api/login', formData);
			let url = "https://backendagragegame.herokuapp.com/api/user/";
			fetch(url, {
					method: 'post',
					headers: {
						"Content-type": "text/html"
					},
					body: JSON.stringify(formData),
					mode: 'cors',
					credentials: 'include'
				})
				.then(function status(response) {
					if (response.status >= 200 && response.status < 300) {
						return Promise.resolve(response)
					} else {
						return Promise.reject(new Error(response.statusText))
					}
				})
				.then(function json(response) {
					return response.json()
				})
				.then(function(data) {
					console.log('Request succeeded with JSON response', data);
				})
				.catch(function(error) {
					console.log('Request failed', error);
				});
			chat.set({
					username: formData.user,
					email: formData.email
				})
				.render();

			chat.subscribe();

			loginPage.hidden = true;
			registPage.hidden = true;
			chatPage.hidden = false;
		});

		registForm.on('submit', event => {
			event.preventDefault();

			let formData = registForm.getFormData();
			//technolibs.request('/api/registration', formData);
			let url = "https://backendagragegame.herokuapp.com/api/user/";
			fetch(url, {
					method: 'post',
					headers: {
						"Content-type": "text/html"
					},
					body: JSON.stringify(formData),
					mode: 'cors',
					credentials: 'include'
				})
				.then(function status(response) {
					if (response.status >= 200 && response.status < 300) {
						return Promise.resolve(response)
					} else {
						return Promise.reject(new Error(response.statusText))
					}
				})
				.then(function json(response) {
					return response.json()
				})
				.then(function(data) {
					console.log('Request succeeded with JSON response', data);
				})
				.catch(function(error) {
					console.log('Request failed', error);
				});

			chat.set({
					username: formData.user,
					email: formData.email
				})
				.render();

			chat.subscribe();

			loginPage.hidden = true;
			registPage.hidden = true;
			chatPage.hidden = false;
		});

		loginPage.appendChild(loginForm.el);
		loginPage.appendChild(registForm.el);
		chatPage.appendChild(chat.el);

		loginPage.hidden = false;
	}

})();
