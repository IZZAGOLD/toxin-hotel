import '../logo/logo';

const CLASS_NAVIGATION_ACTIVE = 'header__site-navigation_active';
const SELECTOR_HEADER = '.js-header';
const SELECTOR_NAVIGATION = '.js-header__site-navigation';
const SELECTOR_USER_NAVIGATION = '.js-header__user-navigation';
const SELECTOR_NAVIGATION_TOGGLE = document.querySelectorAll('.js-header__burger');

function handleNavigationToggleClick(e) {
    const _button = e.currentTarget
    _button.textContent = _button.textContent === 'menu' ? 'close' : 'menu'
    const _header = _button.closest(SELECTOR_HEADER)
    _header.querySelectorAll(SELECTOR_NAVIGATION)[0].classList.toggle(CLASS_NAVIGATION_ACTIVE)
    _header.querySelectorAll(SELECTOR_USER_NAVIGATION)[0].classList.toggle(CLASS_NAVIGATION_ACTIVE)
}

SELECTOR_NAVIGATION_TOGGLE.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNavigationToggleClick(e)
    })
})
