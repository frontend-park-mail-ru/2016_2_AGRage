(function () {
    // import
    const Button = window.Button;
    const View = window.View;

    class profileView extends View {
        constructor(options = {}){
            super(options);
            this._el = document.querySelector('.js-profile');
			this._el.innerHTML = '<h1> Здесь будет профиль игрока! </h1>';
        }
    }

    window.profileView = profileView;
}());
