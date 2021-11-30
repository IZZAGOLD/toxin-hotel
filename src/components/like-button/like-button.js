const CLASS_FAVORITE = 'like-button_favorite';
const SELECTOR_BUTTON = document.querySelectorAll('.js-like-button')

function handleButtonClick(e){
    const counter =  e.currentTarget.querySelector('.js-like-button__counter')
    const icon = e.currentTarget.querySelector('.js-like-button__icon')
    const isFavorite = e.currentTarget.classList.contains(CLASS_FAVORITE)
    const count = +counter.textContent
    e.preventDefault()
    e.currentTarget.classList.toggle(CLASS_FAVORITE)
    isFavorite ? counter.textContent = count - 1 : counter.textContent = count + 1
    isFavorite ? icon.textContent = 'favorite' : 'favorite_border'
}

SELECTOR_BUTTON.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleButtonClick(e)
    })
})


