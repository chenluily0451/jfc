/**
 * Created by jin on 6/22/17.
 */
import {Component, Injectable} from '@angular/core';
import {NgbDatepickerI18n, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    zh: {
        weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
};

// Define a service holding the language. You probably already have one if your app is i18ned.
@Injectable()
export class I18n {
    language: string = 'zh';
}


// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

    constructor(
        private i18n : I18n
    ) {
        super();
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES[this.i18n.language].weekdays[weekday - 1];
    }
    getMonthShortName(month: number): string {
        return I18N_VALUES[this.i18n.language].months[month - 1];
    }
    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }
}


@Injectable()
export class NgbdDatepickerConfig {

    constructor(config: NgbDatepickerConfig) {
        // customize default values of datepickers used by this component tree
        // config.minDate = {year: 1950, month: 1, day: 1};
        config.maxDate = {year: 2099, month: 12, day: 31};

        // days that don't belong to current month are not visible
        // config.outsideDays = 'hidden';

        // weekends are disabled
        // config.markDisabled = (date: NgbDateStruct) => {
        //     const d = new Date(date.year, date.month - 1, date.day);
        //     return d.getDay() === 0 || d.getDay() === 6;
        // };
    }
}
