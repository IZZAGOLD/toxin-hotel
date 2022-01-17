const CLASS_FAVORITE = 'like-button_favorite';
const SELECTOR_BUTTON = document.querySelectorAll('.js-like-button')

function handleButtonClick(e){
    let counter =  e.currentTarget.querySelector('.js-like-button__counter')
    let icon = e.currentTarget.querySelector('.js-like-button__icon')
    let isFavorite = e.currentTarget.classList.contains(CLASS_FAVORITE)
    let count = +counter.textContent
    e.currentTarget.classList.toggle(CLASS_FAVORITE)
    icon.textContent = isFavorite ? 'favorite_border' : 'favorite'
    counter.textContent = isFavorite ? count - 1 : count + 1
}

SELECTOR_BUTTON.forEach(btn =>
    btn.addEventListener('click', e => handleButtonClick(e))
)


