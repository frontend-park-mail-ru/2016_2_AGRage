(function () {
    // import
    const Button = window.Button;
    const View = window.View;

    class ratingView extends View {
        constructor(options = {}){
            super(options);
            this._el = document.querySelector('.js-rating');
			this._el.innerHTML = '<h1> Здесь будет рейтинг! </h1>';
        }
    }

    window.ratingView = ratingView;
}());
