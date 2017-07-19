
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'hidePartialMobile' })
export class PipeHidePartialMobile implements PipeTransform {

    transform(value: string, exponent: string): string {
        if (typeof value !== 'undefined') {
            return value.substr(0, 3) + '****' + value.substr(7);
        }

        return value
    }
}



@Pipe({name: 'systemType'})
export class PipeSystemType implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '未选择';

        if (value === 1) { text = '核心企业' }
        if (value === 2) { text = '资金方企业'}
        if (value === 3) { text = '上游企业'}
        if (value === 4) { text = '平台管理'}


        return text
    }
}
