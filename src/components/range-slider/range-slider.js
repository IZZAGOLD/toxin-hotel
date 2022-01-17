import noUiSlider from 'nouislider';

const labelSelector = document.querySelector('.js-range-slider__label-hint')
const slider = document.querySelector('.slider')

const min = parseInt(slider.getAttribute('min'))
const max = parseInt(slider.getAttribute('max'))
const to = parseInt(slider.getAttribute('to'))
const from = parseInt(slider.getAttribute('from'))

noUiSlider.create(slider, {
    start: [from, to],
    behaviour: 'drag-tap',
    connect: true,
    range: {
        'min': min,
        'max': max
    }
})

slider.noUiSlider.on('update', function (values) {
    labelSelector.innerHTML = `${Math.floor(values[0])}₽ - ${Math.floor(values[1])}₽`
})