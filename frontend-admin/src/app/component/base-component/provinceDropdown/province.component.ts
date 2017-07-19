/**
 * Created by jin on 6/12/17.
 */

import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChange } from '@angular/core';
import { provinceList } from '../../../service/province'


@Component({
    selector: '[province-dropdown]',
    templateUrl: './province.component.html'
})
export class ProvinceDropdownComponent implements  OnChanges {

    @Input()  isShowDistrict: boolean = true;
    @Input()  province: string = '';
    @Input()  city: string = '';
    @Input()  district: string = '';
    @Output() onChange: any = new EventEmitter<any>();

    provinceList : any = provinceList
    currentProvince : any = {
        province : '',
        cities : []
    }
    currentCity : any = {
        city : '',
        counties : []
    }
    currentDistrict : any = {
        county : ''
    }



    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

        for (const property in changes) {
            if (changes.hasOwnProperty(property)) {

                const changedObject = changes[property];
                // console.log(property, changedObject)

                if (property === 'province' && changedObject.currentValue && changedObject.isFirstChange) {
                    const tempProvince = this.provinceList.find( (element, index ) => {
                        return element.province === changedObject.currentValue
                    })

                    if (tempProvince) {
                        this.currentProvince = tempProvince
                    }else {
                        this.currentProvince = {
                            province : '',
                            cities : []
                        }
                    }
                }

                if (property === 'city' && changedObject.currentValue && changedObject.isFirstChange) {
                    const tempCity = this.currentProvince.cities.find( (element, index ) => {
                        return element.city === changedObject.currentValue
                    })

                    if (tempCity) {
                        this.currentCity = tempCity
                    }else {
                        this.currentCity = {
                            city : '',
                            counties : []
                        }
                    }
                }

                if (property === 'district' && changedObject.currentValue && changedObject.isFirstChange) {
                    const tempDistrict = this.currentCity.counties.find( (element, index ) => {
                        return element.county === changedObject.currentValue
                    })

                    if (tempDistrict) {
                        this.currentDistrict = tempDistrict
                    }else {
                        this.currentDistrict = {
                            county : ''
                        }
                    }
                }

            }

        }

    }


    selectProvince (indexProvince: number) {
        this.currentProvince = this.provinceList[indexProvince]

        this.currentCity  = {
            city : '',
            counties : []
        }
        this.currentDistrict = {
            county : ''
        }

        this.onChange.emit({
            province : this.currentProvince.province || '',
            city : this.currentCity.city || '',
            district : this.currentDistrict.county || ''
        });
    }

    selectCity (indexCity: any) {
        this.currentCity = this.currentProvince.cities[indexCity]

        this.currentDistrict = {
            county : ''
        }

        this.onChange.emit({
            province : this.currentProvince.province || '',
            city : this.currentCity.city || '',
            district : this.currentDistrict.county || ''
        });
    }

    selectDistrict (indexDistrict: any) {
        this.currentDistrict = this.currentCity.counties[indexDistrict]

        this.onChange.emit({
            province : this.currentProvince.province || '',
            city : this.currentCity.city || '',
            district : this.currentDistrict.county || ''
        });
    }

}


