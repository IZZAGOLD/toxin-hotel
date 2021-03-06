import $ from 'jquery';
import Dropdown from '../dropdown/dropdown';
import Calendar from '../calendar/calendar';

$(() => {
    const guestsDropdown = new Dropdown($('.js-room-search__dropdown .js-dropdown'), {
        type: Dropdown.prototype.guestsType,
    });
    const calendarDoubleDropdown = new Calendar($('.js-room-search__calendar .js-calendar'), {
        type: Calendar.prototype.typeDouble,
    });
});