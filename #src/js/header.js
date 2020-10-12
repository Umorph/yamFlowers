let burgerButton = document.querySelector('.header__burger-button');

burgerButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    burgerButton.classList.toggle('header__burger-button--active');
});