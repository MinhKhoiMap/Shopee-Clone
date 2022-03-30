var headerSearchHistory__Element = document.querySelector('.header__search-history');

headerSearchHistory__Element.addEventListener('mousedown', function(event) {
    event.preventDefault();
})

var ModalElement = document.querySelector('.modal');
var LogOutBtn = document.querySelector('.header__navbar-user-info--separate');
var authForm__controlsBack = document.querySelector('.auth-form__controls-back');

LogOutBtn.addEventListener('click', function(event) {
    ModalElement.classList.add('open');
})


authForm__controlsBack.addEventListener('click', function(event) {
    ModalElement.classList.toggle('open');
});

var registerBtn = document.querySelector('.auth-form__switch-btn--register');

registerBtn.addEventListener('click', function(event) {
    
})