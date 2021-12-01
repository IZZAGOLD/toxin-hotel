import $ from 'jquery';

import  '../../utils/app.scss';
import './cards.scss';
import '../../components/logo/logo.scss'

import '../../components/room-search/room-search'
import '../../components/room-search/room-search.js'


import Calendar from '../../components/calendar/calendar';


$(() => {
    // eslint-disable-next-line no-unused-vars
    const calendarDoubleDropdown = new Calendar($('.js-calendar_theme_inline.js-calendar'), {
        type: Calendar.prototype.typeDouble,
    });
});