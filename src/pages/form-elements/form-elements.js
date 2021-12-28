import $ from 'jquery';

import  '../../utils/app.scss';
import './form-elements.scss';

import  '../../components/logo/logo.scss';
import '../../components/range-slider/range-slider';
import '../../components/checkbox-expandable-list/checkbox-expandable-list';
import '../../components/pagination/pagination';
import '../../components/like-button/like-button';
import '../../components/feedback/feedback';

import Dropdown from '../../components/dropdown/dropdown';
import Calendar from '../../components/calendar/calendar';
import TextInput from '../../components/text-input/text-input';


$(() => {
    const roomsCollapsed = new Dropdown($('.js-form-elements__dropdown_collapsed .js-dropdown'), {
        type: Dropdown.prototype.roomsType,
    });
    const roomsExpanded = new Dropdown($('.js-form-elements__dropdown_theme_expanded .js-dropdown'), {
        type: Dropdown.prototype.roomsType,
    });
    const guestsEmpty = new Dropdown($('.js-form-elements__dropdown_theme_empty .js-dropdown'), {
        type: Dropdown.prototype.guestsType,
    });
    const guestsFilled = new Dropdown($('.js-form-elements__dropdown_theme_filled .js-dropdown'), {
        type: Dropdown.prototype.guestsType,
    });
    const doubleDatepickerDropdown = new Calendar($('.js-form-elements__dropdown_theme_datepicker .js-calendar'), {
        type: Calendar.prototype.typeDouble,
    });
    const singleDatepickerDropdown = new Calendar($('.js-form-elements__dropdown_theme_date-filter .js-calendar'), {
        type: Calendar.prototype.typeSingle,
    });
    const maskedTextInput = new TextInput($('.js-text-input_has-mask'), {
        hasDateMask: true,
    });
});