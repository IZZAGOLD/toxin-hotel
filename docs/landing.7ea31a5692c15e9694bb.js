(()=>{"use strict";var t,e={3450:(t,e,n)=>{var o=n(9755),i=n.n(o),r=(n(750),"header__site-navigation_active");document.querySelectorAll(".js-header__burger").forEach((function(t){t.addEventListener("click",(function(t){!function(t){var e=t.currentTarget;e.textContent="menu"===e.textContent?"close":"menu";var n=e.closest(".js-header");n.querySelectorAll(".js-header__site-navigation")[0].classList.toggle(r),n.querySelectorAll(".js-header__user-navigation")[0].classList.toggle(r)}(t)}))}));var a="guests",s="rooms",p=".js-dropdown__list-item",u=".js-dropdown__counter-button",l=".js-dropdown__counter",c="dropdown_expanded",d="dropdown__clear-button_hidden",h="dropdown__counter-button_disabled";function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(t,e){this.init(t,e)};y.prototype.guestsType=a,y.prototype.roomsType=s,y.prototype.init=function(t,e){this.$element=t,this.$element.data("api",this),this.$toggleButton=this.$element.find(".js-dropdown__toggle-button"),this.$input=this.$element.find(".js-dropdown__text-input"),this.$changeCountButton=this.$element.find(u),this.$clearButton=this.$element.find(".js-dropdown__clear-button"),this.$applyButton=this.$element.find(".js-dropdown__apply-button"),this.value="",this.parseOptions(e),this.addEventListeners()},y.prototype.parseOptions=function(t){var e=t.type;this.type=e,[a,s].includes(this.type)&&(this.initState(),this.updateState(),this.updateValue(),this.updateView())},y.prototype.initState=function(){var t,e=(f(t={},a,{totalCount:0,categories:[{count:0,nouns:{few:"гостей",one:"гость",two:"гостя"}},{count:0,nouns:{few:"гостей",one:"гость",two:"гостя"}},{count:0,nouns:{few:"младенцев",one:"младенец",two:"младенца"}}]}),f(t,s,{totalCount:0,categories:[{count:0,nouns:{few:"спален",one:"спальня",two:"спальни"}},{count:0,nouns:{few:"кроватей",one:"кровать",two:"кровати"}},{count:0,nouns:{few:"ванных комнат",one:"ванная комната",two:"ванные комнаты"}}]}),t);this.state=e[this.type]},y.prototype.addEventListeners=function(){this.$toggleButton.on("click",this.handleToggleButtonClick.bind(this)),this.$changeCountButton.on("click",this.handleChangeCountButtonClick.bind(this)),this.$clearButton.on("click",this.handleClearButtonClick.bind(this)),this.$applyButton.on("click",this.handleApplyButtonClick.bind(this))},y.prototype.handleToggleButtonClick=function(t){t.preventDefault(),1===this.$element.find(".js-dropdown__list").length&&this.$element.toggleClass(c)},y.prototype.handleChangeCountButtonClick=function(t){t.preventDefault();var e=i()(t.currentTarget).closest(u),n=this.parseModifierValue(e,"js-dropdown__counter-button_type_"),o=i()(t.currentTarget).closest(p);"inc"===n&&o.find(u).removeClass(h);var r=o.find(l),a={inc:function(t){return t+1},dec:function(t){return t-1}}[n](parseInt(r.text(),10));0===a&&e.addClass(h),a<0||(r.text(a),this.$clearButton.removeClass(d),this.updateState(),this.type===s&&this.updateValue(),this.updateView())},y.prototype.handleClearButtonClick=function(t){t.preventDefault(),this.$element.find(l).each((function(t,e){return i()(e).text(0)})),this.$element.find(".js-dropdown__counter-button_type_dec").each((function(t,e){return i()(e).addClass(h)})),this.updateState(),this.updateView()},y.prototype.handleApplyButtonClick=function(t){t.preventDefault(),this.updateValue(),this.$element.removeClass(c)},y.prototype.updateState=function(){var t=this;this.state.totalCount=0,this.$element.find(p).each((function(e,n){var o=parseInt(i()(n).find(l).text(),10);t.state.categories[e].count=o,t.state.totalCount+=o}))},y.prototype.updateValue=function(){if(this.type===a){var t=this.state.categories[this.state.categories.length-1].count,e=this.state.totalCount-t;this.value=this.reduceCountsAndNouns([{count:e,nouns:{one:"гость",two:"гостя",few:"гостей"}},{count:t,nouns:{one:"младенец",two:"младенца",few:"младенцев"}}])}else this.value=this.reduceCountsAndNouns(this.state.categories);this.$input.val(this.value)},y.prototype.reduceCountsAndNouns=function(t){var e=this;return t.map((function(t){return t.count>0?"".concat(t.count," ").concat(e.formatCount(t.count,t.nouns)):""})).filter(Boolean).join(", ")},y.prototype.formatCount=function(t,e){return[e.one,e.two,e.few][t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]},y.prototype.updateView=function(){0===this.state.totalCount&&this.$clearButton.addClass(d)},y.prototype.buildValue=function(t){if(0===this.state.totalCount)return"";if(this.type===a){var e=t[t.length-1],n=parseInt(e,10)||0,o=this.state.totalCount-n,i=this.formatCount(o,{few:"гостей",one:"гость",two:"гостя"}),r="".concat(o," ").concat(i);return e?"".concat(r,", ").concat(e):r}return t.filter(Boolean).join(", ")},y.prototype.parseModifierValue=function(t,e){var n=t.attr("class").split(" ").find((function(t){return t.startsWith(e)}));return n?n.split("_").pop():null};const g=y;n(363);var v=".js-calendar__dropdown",w=".js-dropdown__toggle-button",m=".js-dropdown__text-input",_='[data-action="clear"]',b=function(t,e){this.init(t,e)};b.prototype.typeSingle="single",b.prototype.typeDouble="double",b.prototype.init=function(t,e){var n=e.type;this.type=n,this.$dropdownFrom=t.find(v).eq(0),this.$dropdownTo=t.find(v).eq(1),this.$inputFrom=this.$dropdownFrom.find("input"),this.$inputTo=this.$dropdownTo.find("input"),this.$datepickerContainer=t.find(".js-calendar__container"),this.currentInputValues=[],this.isInline=t.hasClass("js-calendar_theme_inline"),this.initDatepicker(t),this.setDates(),this.addEventListeners(),this.isInline&&this.$datepickerApi.show()},b.prototype.initDatepicker=function(){var t=this;this.$datepickerApi=this.$datepickerContainer.datepicker({range:!0,minDate:new Date,navTitles:{days:"MM <i>yyyy</i>"},prevHtml:'<span class="material-icons">arrow_back</span>',nextHtml:'<span class="material-icons">arrow_forward</span>',onShow:function(e){t.addButtons(e.$datepicker)},onSelect:function(){t.type===b.prototype.typeDouble&&t.setDropdownValueTypeDouble(t.currentInputValues),t.type===b.prototype.typeSingle&&t.setDropdownValueTypeSingle(t.currentInputValues),t.toggleClearButton()}}).data("datepicker")},b.prototype.addEventListeners=function(){this.$dropdownFrom.find(w).on("click",this.handleToggleButtonClick.bind(this)),this.$dropdownTo.find(w).on("click",this.handleToggleButtonClick.bind(this))},b.prototype.handleToggleButtonClick=function(){this.$datepickerApi.$el.find(".datepicker").is(":visible")?this.$datepickerApi.hide():this.$datepickerApi.show()},b.prototype.setDates=function(){var t=this.type===b.prototype.typeDouble?this.parseDatesTypeDouble():this.parseDatesTypeSingle(),e=t[0].split("."),n=t[1].split("."),o=new Date("".concat(e[2],"-").concat(e[1],"-").concat(e[0])),i=new Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])),r=[];o instanceof Date&&!Number.isNaN(o.getTime())&&r.push(o),i instanceof Date&&!Number.isNaN(i.getTime())&&r.push(i),this.currentInputValues=[].concat(r),r.length>0&&this.$datepickerApi.selectDate(r)},b.prototype.clear=function(){this.$dropdownFrom.find(m).val(""),this.$dropdownTo.find(m).val(""),this.currentInputValues=[]},b.prototype.update=function(){var t=this.$datepickerApi.selectedDates;0!==t.length&&(this.type===b.prototype.typeDouble&&this.setDropdownValueTypeDouble(t),this.type===b.prototype.typeSingle&&this.setDropdownValueTypeSingle(t))},b.prototype.addButtons=function(t){var e=this.createButton("clear","Очистить"),n=this.createButton("apply","Применить");if(0===t.find(_).length&&e.on("click",this.handleClearButtonClick.bind(this)),0===t.find('[data-action="apply"]').length&&n.on("click",this.handleApplyButtonClick.bind(this)),0===t.find(".js-datepicker__footer").length){var o=i()('<div class="datepicker__footer js-datepicker__footer"></div>');o.append(e).append(n),t.append(o)}this.toggleClearButton()},b.prototype.toggleClearButton=function(){var t=this.$datepickerApi.selectedDates.length<2;this.$datepickerContainer.find(_).toggleClass("button_hidden",t)},b.prototype.createButton=function(t,e){var n='<button class="button button_theme_textual '.concat("clear"===t?"button_hovered":"",'" type="button" data-action="').concat(t,'">\n                      <div class="button__inner-wrapper">\n                        <span class="button__caption">').concat(e,"</span>\n                      </div>\n                    </button>");return i()(n)},b.prototype.handleClearButtonClick=function(){this.isInline||(this.$datepickerApi.clear(),this.clear())},b.prototype.handleApplyButtonClick=function(){this.isInline||(this.$datepickerApi.hide(),this.update())},b.prototype.parseDatesTypeSingle=function(){return this.$inputFrom.val().split("-")},b.prototype.parseDatesTypeDouble=function(){return[this.$inputFrom.val(),this.$inputTo.val()]},b.prototype.setDropdownValueTypeSingle=function(t){if((t[0]&&t[1])instanceof Date){var e={month:"short",day:"numeric"},n=Intl.DateTimeFormat("ru-RU",e).format(t[0]),o=Intl.DateTimeFormat("ru-RU",e).format(t[1]),i="".concat(n," - ").concat(o);this.$inputFrom.val(i)}else this.$inputFrom.val("")},b.prototype.setDropdownValueTypeDouble=function(t){if((t[0]&&t[1])instanceof Date){var e={year:"numeric",month:"numeric",day:"numeric"},n=Intl.DateTimeFormat("ru-RU",e).format(t[0]);this.$dropdownFrom.find(m).val(n);var o=Intl.DateTimeFormat("ru-RU",e).format(t[1]);this.$dropdownTo.find(m).val(o),this.currentInputValues=t}else this.$inputFrom.val(""),this.$inputTo.val("")};const $=b;i()((function(){new g(i()(".js-room-search__dropdown .js-dropdown"),{type:g.prototype.guestsType}),new $(i()(".js-room-search__calendar .js-calendar"),{type:$.prototype.typeDouble})}))},750:(t,e,n)=>{t.exports=n.p+"favicons/logo.svg"}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return e[t].call(r.exports,r,r.exports,o),r.exports}o.m=e,t=[],o.O=(e,n,i,r)=>{if(!n){var a=1/0;for(l=0;l<t.length;l++){for(var[n,i,r]=t[l],s=!0,p=0;p<n.length;p++)(!1&r||a>=r)&&Object.keys(o.O).every((t=>o.O[t](n[p])))?n.splice(p--,1):(s=!1,r<a&&(a=r));if(s){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,i,r]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={246:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var i,r,[a,s,p]=n,u=0;if(a.some((e=>0!==t[e]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(p)var l=p(o)}for(e&&e(n);u<a.length;u++)r=a[u],o.o(t,r)&&t[r]&&t[r][0](),t[a[u]]=0;return o.O(l)},n=self.webpackChunktoxin=self.webpackChunktoxin||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=o.O(void 0,[363,526],(()=>o(3450)));i=o.O(i)})();
//# sourceMappingURL=landing.7ea31a5692c15e9694bb.js.map