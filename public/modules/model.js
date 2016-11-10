(function () {
	'use strict';

	class Model {

		constructor(attributes = {}) {
			Object.keys(attributes).forEach(key => {
				if (attributes[key] === undefined) {
					delete attributes[key];
				}
			})
			this.attributes = Object.assign({}, this.defaults, attributes);
		}

		get defaults() {
			return {};
		}

		get url() {
			return '/';
		}

		sendRequest(to, curMethod, curBody = {}) {
			const baseUrl = 'http://89.19.173.36:8080/api/user';
			const myUrl = baseUrl + to;
			fetch(myUrl, {
					method: curMethod,
					mode: 'cors',
					credentials: 'include',
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					},
					body: JSON.stringify(curBody)
				})
				.then(function(data) {
					console.log('Request succeeded with JSON response', data);
				})
				.catch(function(error) {
					console.log('Request failed', error);
				});
		}

		save() {
			let method = this.attributes.id ? 'PUT' : 'POST';

			return this.send(method, this.attributes);
		}

	}

	// export
	window.Model = Model;
})();
