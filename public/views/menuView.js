(function () {
    // import
    const Button = window.Button;
    const View = window.View;
	const loginView = window.loginView;

    class menuView extends View {
        constructor(options = {}){
            super(options);
            this._el = document.querySelector('.js-menu');
            this.createElements();
            this.addElements();
            this.addListeners();
            this.hide();
        }

        createElements() {
            this.buttonSearchGame = new Button({
                el: document.createElement('button'),
				classAttrs: ['LoginButton'],
                text: 'поиск игры',
            });

            this.buttonRating = new Button({
                el: document.createElement('button'),
				classAttrs: ['LoginButton'],
                text: 'общий рейтинг',
            });
			this.buttonUserProfile = new Button({
				el: document.createElement('button'),
				classAttrs: ['LoginButton'],
				text: 'профиль',
			});

			this.buttonConfig = new Button({
				el: document.createElement('button'),
				classAttrs: ['LoginButton'],
				text: 'настройки',
			});
        }

        addElements() {

			this._el.appendChild(this.buttonSearchGame._get());
			this._el.appendChild(this.buttonRating._get());
			this._el.appendChild(this.buttonUserProfile._get());
			this._el.appendChild(this.buttonConfig._get());
        }

        addListeners() {
            this.buttonSearchGame._get().addEventListener('click', (event) => {
                console.log('click SearchGame');
                this.router.go('/searchGame');
            });
            this.buttonRating._get().addEventListener('click', (event) => {
                console.log('click rating');
                this.router.go('/rating');
            });
			this.buttonUserProfile._get().addEventListener('click', (event) => {
				console.log('click profile');
				this.router.go('/profile');
			});
			this.buttonConfig._get().addEventListener('click', (event) => {
				console.log('click config');
				this.router.go('/config');
			});
        }
    }

    window.menuView = menuView;
}());
