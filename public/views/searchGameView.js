(function () {
    // import
    const Button = window.Button;
    const View = window.View;

    class searchGameView extends View {
        constructor(options = {}){
            super(options);
            this._el = document.querySelector('.js-searchGame');
			this._el.innerHTML = '<h1> Здесь будет поиск игры! </h1>';
        }
    }

    window.searchGameView = searchGameView;
}());
