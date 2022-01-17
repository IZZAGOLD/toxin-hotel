const CLASS_EXPANDED = 'checkbox-expandable-list_expanded'
const SELECTOR_CHECKBOX_EXPANDABLE_LIST = '.js-checkbox-expandable-list'
const SELECTOR_TOGGLE = document.querySelectorAll('.js-checkbox-expandable-list__toggle-button')

function CheckboxListExpandable(event) {
    event.currentTarget.closest(SELECTOR_CHECKBOX_EXPANDABLE_LIST).classList.toggle(CLASS_EXPANDED)
}

SELECTOR_TOGGLE.forEach((selector) => {
    selector.addEventListener('click', (event) => {CheckboxListExpandable(event)})
})
