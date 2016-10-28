(function () {
    // import
    const Button = window.Button;
    const View = window.View;
	const loginView = window.loginView;

    class configView extends View {
        constructor(options = {}){
            super(options);
            this._el = document.querySelector('.js-config');
			this._el.innerHTML = '<h1> Здесь будут настройки! </h1>';
        }
    }

    window.configView = configView;
}());
