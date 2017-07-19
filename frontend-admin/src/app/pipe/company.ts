/**
 * Created by jin on 6/7/17.
 */

import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   company.companyStatus | companyInfoStatus
 * Example:
 *   {{ company.companyStatus |  companyInfoStatus}}
 *
 */



@Pipe({name: 'companyInfoStatus'})
export class PipeCompanyInfoStatus implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '企业信息未提交';

        if (value === 1) { text = '等待审核' }
        if (value === 2) { text = '审核不通过, 等待企业重新修改信息'}
        if (value === 3) { text = '审核不通过, 结束' }
        if (value === 4) { text = '审核已通过' }

        return text
    }
}



@Pipe({name: 'operationType'})
export class PipeOperationType implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '未选择';

        if (value === 1) { text = '有期限' }
        if (value === 2) { text = '无期限'}

        return text
    }
}



@Pipe({name: 'companyType'})
export class PipeCompanyType implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '未选择';

        if (value === 0) { text = '国有上市企业全资控股企业' }
        if (value === 1) { text = '国有上市企业绝对控股企业'}
        if (value === 2) { text = '国有上市企业相对控股企业'}
        if (value === 3) { text = '国有非上市企业全资控股企业'}
        if (value === 4) { text = '国有非上市企业绝对控股企业'}
        if (value === 5) { text = '国有非上市企业相对控股企业'}
        if (value === 6) { text = '民营上市企业全资控股企业'}
        if (value === 7) { text = '民营上市企业绝对控股企业'}
        if (value === 8) { text = '民营上市企业相对控股企业'}
        if (value === 9) { text = '民营非上市企业'}

        return text
    }
}



@Pipe({name: 'trafficMode'})
export class PipeTrafficMode implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '未选择';

        if (value === 0) { text = '汽运' }
        if (value === 1) { text = '火运'}
        if (value === 2) { text = '船运'}

        return text
    }
}



@Pipe({name: 'payMode'})
export class PipePayMode implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '未选择';

        if (value === 0) { text = '现汇' }
        if (value === 1) { text = '电汇'}
        if (value === 2) { text = '承兑汇票'}
        if (value === 3) { text = '电汇+承兑汇票'}

        return text
    }
}

